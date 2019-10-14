import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { loginSuccess, loginFailure } from './actions';

export function* doLogin({ payload }) {
	const { email, password } = payload;

	try {
		// Call Sessions API for Login
		const response = yield call(api.post, 'sessions', {
			email,
			password,
		});

		const { token, user } = response.data;

		// Save Token in the Header
		api.defaults.headers.Authorization = `Bearer ${token}`;

		// Call Action (PUT)
		yield put(loginSuccess(token, user));

		// Redirect to Dashboard if Logged
		history.push('dashboard');
	} catch (error) {
		// Call Action (PUT)
		yield put(loginFailure());
		toast.error('Whoops! E-mail e senha inválidos.');
	}
}

/**
 * Action dispatched by Redux
 * @param {object} payload Object of data
 */
export function setToken({ payload }) {
	if (!payload) return;

	const { token } = payload.auth;

	if (token) {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

// Observers
export default all([
	takeLatest('@auth/LOGIN_REQUEST', doLogin),
	takeLatest('persist/REHYDRATE', setToken),
]);
