/* eslint-disable import/prefer-default-export */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const driveBaseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4007/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { token } = getState().auth;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const driveApiSlice = createApi({
  baseQuery: driveBaseQuery,
  reducerPath: 'driveApi',
  endpoints: () => ({}),
});
