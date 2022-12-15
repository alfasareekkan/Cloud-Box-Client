/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice';
import SidebarReducer from '../features/Global/sidebarSlice';
import iconReducer from '../features/Global/iconSlice';
import createMenuReducer from '../features/Global/menuSlice';
import modalReducer from '../features/Global/modalSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    sideBar: SidebarReducer,
    icon: iconReducer,
    createMenu: createMenuReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
