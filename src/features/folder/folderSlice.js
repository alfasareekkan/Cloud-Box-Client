/* eslint-disable no-underscore-dangle */
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
      state.childFolders = [...action.payload.folders];
      state.childFiles = [...action.payload.files];
    },
    insertPath: (state, action) => {
      const data = state.path.find((path) => path.id === action.payload._id);
      if (!data) {
        state.path.push({ path: action.payload.folderName, id: action.payload._id });
      }
    },
    updatePath: (state, action) => {
      const index = state.path.findIndex((path) => path.id === action.payload.id);
      if (index === state.path.length - 1) return;
      const newPaths = state.path.slice(0, index + 1);
      if (index === 0) {
        // state
        state.folder = null;
        state.folderId = null;
        state.level = 1;
      } else {
        state.folder = action.payload.path;
        state.folderId = action.payload.id;
      }
      state.path = newPaths;

      state.childFolders = [];
    },
    pushFile: (state, action) => {
      state.childFiles = [...state.childFiles, action.payload];
    },
    removeFile: (state, action) => {
      const index = state.childFiles.findIndex((file) => file._id === action.payload);
      state.childFiles.splice(index, 1);

    }

    // default: (state) => state,
  },
});
export const {
  selectFolder, updateFolder, updateChildFolders,
  insertChildFolders, updatePath, insertPath, pushFile,
  removeFile
} = folderSlice.actions;
export default folderSlice.reducer;
