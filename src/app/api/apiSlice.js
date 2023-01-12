/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_AUTH_API,
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

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    // console.log(`sending refresh token`);
    // send the refresh token to get new accessToken
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      // eslint-disable-next-line no-undef
      const user = getState().auth.token;
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery,

  endpoints: () => ({}),
});
