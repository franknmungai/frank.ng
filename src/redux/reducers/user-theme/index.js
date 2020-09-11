import * as types from '../../actions/action-types';
const initialState = {
	light: true,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_THEME:
			return { light: !state.light };

		default:
			return state;
	}
};
