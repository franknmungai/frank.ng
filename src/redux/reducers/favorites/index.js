import * as types from '../../actions/action-types';
const initialState = [];

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_FAVORITE:
			return state.concat(action.id);
		case types.REMOVE_FAVORITE:
			return state.filter((id) => id !== action.id);
		default:
			return state;
	}
};

export default favoritesReducer;
