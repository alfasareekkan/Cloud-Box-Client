/* eslint-disable import/prefer-default-export */
import { driveApiSlice } from '../../app/api/driveApiSlice';

export const fileShareApiSlice = driveApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllShareFiles: builder.mutation({
      query: (credentials) => ({
        url: `files/get-shared-files`,
        method: 'GET',
      }),
    }),
  }),
});

export const
  {
    useGetAllShareFilesMutation,
  } = fileShareApiSlice;
