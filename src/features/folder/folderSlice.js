/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const folderSlice = createSlice({
  name: 'folder',
  initialState: {
    folderId: null,
    folder: null,
    childFolders: [],
    childFiles: [],
    level: 1,

  },
  reducers: {
    selectFolder: (state, action) => {
      state.folderId = action.folderId;
      state.folder = action.folder;
    },
    updateFolder: (state, action) => {
      state.folder = action.payload.folderName;
      state.folderId = action.payload._id;
      state.childFolders = [];
      state.level = action.payload.folderLevel + 1;
      console.log(state,'😢😢😢');
    },
    updateChildFolders: (state, action) => {
      console.log(action.payload);
      state.childFolders.push(action.payload);
    },
    insertChildFolders: (state, action) => {
      console.log();
      console.log(action);

      state.childFolders = [...state.childFolders, ...action.payload];
      console.log(state,'❤️❤️❤️');
    },

    // default: (state) => state,
  },
});
export const {
  selectFolder, updateFolder, updateChildFolders, insertChildFolders,
} = folderSlice.actions;
export default folderSlice.reducer;
