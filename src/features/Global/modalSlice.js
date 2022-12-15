/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    folderCreationModal: false,
  },
  reducers: {
    openFolderCreation: (state) => {
      if (state.folderCreationModal) state.folderCreationModal = false;
      state.folderCreationModal = true;
    },
    closeFolderCreation: (state) => {
      state.folderCreationModal = false;
    },
  },
});

export const { openFolderCreation, closeFolderCreation } = modalSlice.actions;
export default modalSlice.reducer;
