/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const sharedFileSlice = createSlice({
  name: 'sharedFile',
  initialState: {
    folderId: null,
    folder: null,
    childFolders: [],
    childFiles: [],
    // path: [{ path: 'MyDrive', id: 'myDrive' }],
  },
  reducers: {
    setChileFiles: (state, action) => {
      state.childFiles = action.payload;
    },
  },
});

export const { setChileFiles } = sharedFileSlice.actions;
export default sharedFileSlice.reducer;
