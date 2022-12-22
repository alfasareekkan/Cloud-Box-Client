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
    path: [{ path: 'MyDrive', id: 'myDrive' }],

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
    },
    updateChildFolders: (state, action) => {
     
      state.childFolders.push(action.payload);
    },
    insertChildFolders: (state, action) => {

      state.childFolders = [...state.childFolders, ...action.payload];
    },
    updatePath: (state, action) => {
      console.log(action.payload);
      const data = state.path.find((path) => path.id === action.payload._id);
      if (!data) {
        state.path.push({ path: action.payload.folderName, id: action.payload._id });
      }
      console.log(state.path,"23");
    },

    // default: (state) => state,
  },
});
export const {
  selectFolder, updateFolder, updateChildFolders, insertChildFolders, updatePath,
} = folderSlice.actions;
export default folderSlice.reducer;
