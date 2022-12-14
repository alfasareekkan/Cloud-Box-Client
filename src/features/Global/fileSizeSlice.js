/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const fileSizeSlice = createSlice({
  name: 'fileSize',
  initialState: {
    fileSize: 0,
  },
  reducers: {
    setFileSize: (state, action) => {
      state.fileSize = action.payload;
    },
  },
});
export const { setFileSize } = fileSizeSlice.actions;
export default fileSizeSlice.reducer;
