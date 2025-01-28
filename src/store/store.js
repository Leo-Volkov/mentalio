import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './features/auth/authSlice.js';
import userFilesSlice from './features/userFiles/userFilesSlice.js';
import publicFilesSlice from './features/publicFiles/publicFilesSlice.js';
import analyticsSlice from './features/analytics/analyticsSlice.js';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'], // Сохраняйте только фрагмент авторизации
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		userFiles: userFilesSlice,
		publicFiles: publicFilesSlice,
		auth: persistedReducer,
		analytics: analyticsSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // отключаем, чтобы не было конфликтов с redux-persist
		}),
});

export const persistor = persistStore(store);