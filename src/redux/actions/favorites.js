import * as types from './action-types';

export const addFavorite = (id) => ({
	type: types.ADD_FAVORITE,
	id,
});

export const removeFavorite = (id) => ({
	type: types.REMOVE_FAVORITE,
	id,
});
