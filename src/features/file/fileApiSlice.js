import { driveApiSlice } from '../../app/api/driveApiSlice';

const fileApiSlice = driveApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: (credentials) => ({
        url: 'files/upload',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    getFileSize: builder.query({
      query: () => ({
        url: 'files/get-file-size',
        method: 'GET',

        // body: { ...credentials },
      }),
    }),
    getFile: builder.mutation({
      query: (credentials) => ({
        url: 'files/get-file',
        method: 'POST',

        body: { ...credentials },
      }),
    }),
    getAllFile: builder.mutation({
      query: (credentials) => ({
        url: 'files/get-all-file',
        method: 'GET',
      }),
    }),
    deleteFile: builder.mutation({
      query: (credentials) => ({
        url: `files/delete-file/${credentials}`,
        method: 'DELETE',
      }),
    }),
    addToFavourite: builder.mutation({
      query: (credentials) => ({
        url: `files/add-to-favourite/${credentials}`,
        method: 'PATCH',
      }),
    }),
    getAllFavorite: builder.mutation({
      query: () => ({
        url: 'files/get-all-favorite',
        method: 'GET',
      }),
    }),
  }),

});

export const {
  useUploadFileMutation, useGetFileSizeQuery, useGetFileMutation, useGetAllFileMutation,
  useDeleteFileMutation,useAddToFavouriteMutation,useGetAllFavoriteMutation
} = fileApiSlice;
