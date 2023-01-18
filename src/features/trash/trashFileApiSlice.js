/* eslint-disable import/prefer-default-export */
import { driveApiSlice } from '../../app/api/driveApiSlice';

export const fileTrashApiSlice = driveApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrashFile: builder.mutation({
      query: (credentials) => ({
        url: 'trash/',
        method: 'GET',
      }),
    }),
  }),
});

export const {
    useGetTrashFileMutation
}=fileTrashApiSlice
