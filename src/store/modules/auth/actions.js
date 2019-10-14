export function loginRequest(email, password) {
	return {
		type: '@auth/LOGIN_REQUEST',
		payload: { email, password },
	};
}

export function loginSuccess(token, user) {
	return {
		type: '@auth/LOGIN_SUCCESS',
		payload: { token, user },
	};
}

export function loginFailure() {
	return {
		type: '@auth/LOGIN_FAILURE',
	};
}

export function logoutRequest() {
	return {
		type: '@auth/LOGOUT_REQUEST',
	};
}
