/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const trashFileSlice = createSlice({
  name: 'trash',
  initialState: {
    folderId: null,
    folder: null,
    childFolders: [],
    childFiles: [],
    // path: [{ path: 'MyDrive', id: 'myDrive' }],
  },
  reducers: {
    setTrashFile: (state, action) => {
      state.childFiles = action.payload;
    },
  },
});

export const { setTrashFile } = trashFileSlice.actions;
export default trashFileSlice.reducer;
