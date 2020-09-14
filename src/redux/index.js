import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoritesReducer from './reducers/favorites';
import articlesReducer from './reducers/articles';
import projectsReducer from './reducers/projects';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	articles: articlesReducer,
	projects: projectsReducer,
	user: userReducer,
});

const persistConfig = {
	key: 'root', //root reducer
	storage, //localstorage object
	whitelist: ['user', 'favorites'], //reducers we want to persist
};

const store = createStore(
	persistReducer(persistConfig, rootReducer),
	composeWithDevTools()
);
export const persistor = persistStore(store);

export default store;
