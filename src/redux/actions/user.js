import * as types from './action-types';

export const toggleTheme = () => ({
	type: types.TOGGLE_THEME,
});

export const createSubscription = (email) => ({
	type: types.CREATE_SUBSCRIPTION,
	email,
});

export const cancelSubscription = () => ({
	type: types.CANCEL_SUBSCRIPTION,
});
export const subscribe = (user) => async (dispatch) => {
	const resp = await window.fetch(types.BASE_URL + '/subscription', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	});
	if (!resp.ok) {
		const { errors } = await resp.json();
		throw errors;
	}

	const { success } = await resp.json();

	dispatch(createSubscription(user.email));
	return success;
};

export const unsubscribe = (email) => async (dispatch) => {
	const resp = await fetch(types.BASE_URL + '/subscription', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(email),
	});
	if (!resp.ok) {
		const error = await resp.json();
		throw error;
	}
	dispatch(cancelSubscription());
};
