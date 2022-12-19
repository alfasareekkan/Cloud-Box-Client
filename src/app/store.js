/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice';
import SidebarReducer from '../features/Global/sidebarSlice';
import iconReducer from '../features/Global/iconSlice';
import createMenuReducer from '../features/Global/menuSlice';
import modalReducer from '../features/Global/modalSlice';
import { driveApiSlice } from './api/driveApiSlice';
import folderReducer from '../features/folder/folderSlice';

export const store = configureStore({
  reducer: {
    [driveApiSlice.reducerPath]: driveApiSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    sideBar: SidebarReducer,
    icon: iconReducer,
    createMenu: createMenuReducer,
    modal: modalReducer,
    folder: folderReducer,
  },
  // eslint-disable-next-line max-len
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([driveApiSlice.middleware]),
  devTools: true,
});
