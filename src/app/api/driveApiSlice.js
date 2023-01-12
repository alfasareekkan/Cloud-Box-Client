/* eslint-disable import/prefer-default-export */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const driveBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_DRIVE_API,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');
    if (token) {
      headers.set('refreshAuthorization', `Bearer ${token}`);
    }
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const driveApiSlice = createApi({
  baseQuery: driveBaseQuery,
  reducerPath: 'driveApi',
  endpoints: () => ({}),
});
