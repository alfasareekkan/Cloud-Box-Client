import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    googleSignUP: builder.mutation({
      query: (credentials) => ({
        url: '/google-signup',
        method: 'POST',
        body: { credentials },
      }),
    }),
    googleLogin: builder.mutation({
      query: (credentials) => ({
        url: '/google-login',
        method: 'POST',
        body: { credentials },
      }),
    }),
  }),
});

export const {
  useLoginMutation, useSignupMutation, useGoogleLoginMutation, useGoogleSignUPMutation,
} = authApiSlice;
