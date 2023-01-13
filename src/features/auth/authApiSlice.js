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
    getRefreshToken: builder.mutation({
      query: () => ({
        url: '/refresh-token',
        method: 'POST',
      }),
    }),
    getUserDetails: builder.mutation({
      query: () => ({
        url: 'user/get-user',
        method: 'GET',
      }),
    }),
    sendOtp: builder.mutation({
      query: (credentials) => ({
        url: 'user/send-otp',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation, useSignupMutation, useGetRefreshTokenMutation,
  useGoogleSignUPMutation, useGetUserDetailsMutation, useSendOtpMutation,
} = authApiSlice;
