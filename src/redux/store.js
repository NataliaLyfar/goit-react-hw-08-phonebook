import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {contactsApi, filterSlice} from'./contacts';
import { middleware } from './middleware';
import { authReducer } from './auth';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsApi.reducer,
    filter: filterSlice.reducer,
    },
  middleware: middleware,
});

export const persistor = persistStore(store);

