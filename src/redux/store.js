import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from'./contacts';
import { phonebookApi } from './phonebookApiQuery';
import { middleware } from './middleware';
import authSlice from './auth/authSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    contact: contactsSlice.reducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    },
  middleware,
});

export const persistor = persistStore(store);

