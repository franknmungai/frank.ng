import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
	key: 'root', //root reducer
	storage, //localstorage object
	whitelist: ['theme', 'favorites'], //reducers we want to persist
};

const store = createStore(
	persistReducer(persistConfig, rootReducer),
	composeWithDevTools()
);
export const persistor = persistStore(store);

export default store;
