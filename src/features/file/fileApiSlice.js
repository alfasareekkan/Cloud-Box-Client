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
  }),
});

export const { useUploadFileMutation, useGetFileSizeQuery } = fileApiSlice;
