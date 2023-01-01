/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    folderCreationModal: false,
    fileCreationModal: false,
  },
  reducers: {
    openFolderCreation: (state) => {
      if (state.folderCreationModal) state.folderCreationModal = false;
      state.folderCreationModal = true;
    },
    closeFolderCreation: (state) => {
      state.folderCreationModal = false;
    },
    openFileCreation: (state) => {
      if (state.fileCreationModal) state.fileCreationModal = false;
      state.fileCreationModal = true;
    },
    closeFileCreation: (state) => {
      state.fileCreationModal = false;
    },
  },

});

export const
  {
    openFolderCreation, closeFolderCreation, openFileCreation, closeFileCreation,
  } = modalSlice.actions;
export default modalSlice.reducer;
