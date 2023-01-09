/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice';
import SidebarReducer from '../features/Global/sidebarSlice';
import iconReducer from '../features/Global/iconSlice';
import createMenuReducer from '../features/Global/menuSlice';
import modalReducer from '../features/Global/modalSlice';
import { driveApiSlice } from './api/driveApiSlice';
import fileSizeReducer from '../features/Global/fileSizeSlice';
import folderReducer from '../features/folder/folderSlice';
import { authApiSlice } from '../features/auth/authApiSlice';
import sharedFileReducer from '../features/shared/shareFileSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    [driveApiSlice.reducerPath]: driveApiSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,

    folder: persistReducer(persistConfig, folderReducer),

    sideBar: SidebarReducer,
    icon: iconReducer,
    createMenu: createMenuReducer,
    modal: modalReducer,
    fileSize: fileSizeReducer,
    shared: sharedFileReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat([driveApiSlice.middleware, authApiSlice.middleware]),
  devTools: true,
});
export const persistor = persistStore(store);
