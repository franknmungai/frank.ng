import * as types from '../../actions/action-types';
const initialState = {
	email: '',
	theme: {
		light: true,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_THEME:
			return { ...state, theme: { light: !state.theme.light } };

		default:
			return state;
	}
};
