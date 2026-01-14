import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';
import {
	TypedStartListening,
	combineReducers,
	configureStore,
	createListenerMiddleware,
} from '@reduxjs/toolkit';
// it is needed to be imported here for the actual definition
// eslint-disable-next-line no-restricted-imports
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const appReducer = combineReducers({});

const persistedReducer = persistReducer(persistConfig, appReducer);

const listenerMiddleware = createListenerMiddleware();
const middlewares = [listenerMiddleware.middleware];

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// ignore redux persist actions in serializable check
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(middlewares),
});

export const persistor = persistStore(store, null, () => {});

type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
