import { createSlice } from '@reduxjs/toolkit';

const createMenuSlice = createSlice({
  name: 'createMenu',
  initialState: { createMenu: false },
  reducers: {
    setCreateMenu: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.createMenu = action.payload;
    },
  },
});
export const { setCreateMenu } = createMenuSlice.actions;
export default createMenuSlice.reducer;
