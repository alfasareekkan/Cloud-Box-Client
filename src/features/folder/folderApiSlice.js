/* eslint-disable import/prefer-default-export */
import { driveApiSlice } from '../../app/api/driveApiSlice';

export const folderApiSlice = driveApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFolder: builder.mutation({
      query: (credentials) => ({
        url: 'create-folder',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    getFolder: builder.mutation({
      query: (credentials) => ({
        url: 'get-folder',
        body: { ...credentials },
        method: 'POST',
      }),
    }),
    getAllFolders: builder.mutation({
      query: (credentials) => ({
        url: 'get-all-folders',
        body: { ...credentials },
        method: 'POST',
      }),
    }),
  }),
});

export const
  {
    useCreateFolderMutation, useGetFolderMutation, useGetAllFoldersMutation,
  } = folderApiSlice;
