import { combineReducers, createStore } from 'redux';
import favoritesReducer from './reducers/favorites';
import articlesReducer from './reducers/articles';
import projectsReducer from './reducers/projects';
import userTheme from './reducers/user-theme';

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	articles: articlesReducer,
	projects: projectsReducer,
	theme: userTheme,
});

const store = createStore(rootReducer);

export default store;
