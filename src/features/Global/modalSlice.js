/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    folderCreationModal: false,
    fileCreationModal: false,
    shareFolder: false,
    shareFolderId: '',
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
    openFolderShare: (state) => {
      if (state.shareFolder) state.shareFolder = false;
      state.shareFolder = true;
    },
    closeFolderShare: (state) => {
      state.shareFolder = false;
    },
    setShareFolderModalId: (state, action) => {
      state.shareFolderId = action.payload;
    },
  },

});

export const
  {
    openFolderCreation, closeFolderCreation,
    openFileCreation, closeFileCreation, openFolderShare, closeFolderShare, setShareFolderModalId,
  } = modalSlice.actions;
export default modalSlice.reducer;
