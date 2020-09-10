import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import cartolaAPI from '../../../services/cartola';
import api from '../../../services/api';
import history from '../../../services/history';
import { loginSuccess, loginFailure } from './actions';

export function* doLogin({ payload }) {
	const { email, password } = payload;

	try {
		const response = yield call(
			api.post,
			'authentication',
			{
				payload: {
					email,
					password,
					serviceId: 4728,
				},
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		const { glbId } = response.data;

		cartolaAPI.defaults.headers['X-GLB-TOKEN'] = glbId;

		const {
			data: { time },
		} = yield call(cartolaAPI.get, 'auth/time/info');

		yield put(
			loginSuccess(glbId, email, {
				name: time.nome,
				coach: time.nome_cartola,
				flag: time.url_escudo_svg,
			})
		);

		history.push('dashboard');
	} catch (error) {
		yield put(loginFailure());
		toast.error('😭 😭 😭 E-mail e senha inválidos.');
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
		cartolaAPI.defaults.headers['X-GLB-TOKEN'] = token;
	}
}

export default all([
	takeLatest('@auth/LOGIN_REQUEST', doLogin),
	takeLatest('persist/REHYDRATE', setToken),
]);
