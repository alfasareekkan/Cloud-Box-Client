/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const folderSlice = createSlice({
  name: 'folder',
  initialState: {
    folderId: null,
    folder: null,
    childFolders: [],
    childFiles: [],

  },
  reducers: {
    selectFolder: (state, action) => {
      state.folderId = action.folderId;
      state.folder = action.folder;
    },
    updateFolder: (state, action) => {
      state = {
        ...state,
      };
      state.folder = action.folder;
    },
    // default: (state) => state,
  },
});
export const { selectFolder, updateFolder } = folderSlice.actions;
export default folderSlice.reducer;
