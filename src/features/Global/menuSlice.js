import { createSlice } from '@reduxjs/toolkit';

const createMenuSlice = createSlice({
  name: 'createMenu',
  initialState: { createMenu: false, rightClickMenu: false },
  reducers: {
    setCreateMenu: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.createMenu = action.payload;
    },
    setRightClickMenu: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.rightClickMenu = action.payload;
    },
  },
});
export const { setCreateMenu, setRightClickMenu } = createMenuSlice.actions;
export default createMenuSlice.reducer;
