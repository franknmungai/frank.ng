import * as types from '../../actions/action-types';
const initialState = {
	email: '',
	subscribed: false,
	theme: {
		light: true,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_THEME:
			return { ...state, theme: { light: !state.theme.light } };
		case types.CREATE_SUBSCRIPTION:
			return {
				...state,
				email: action.email,
				subscribed: true,
			};
		case types.CANCEL_SUBSCRIPTION:
			return {
				...state,
				email: '',
				subscribed: false,
			};

		default:
			return state;
	}
};
