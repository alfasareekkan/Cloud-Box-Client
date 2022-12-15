import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: { menu: true },
  reducers: {
    setSidebar: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.menu = action.payload;
    },
  },
});

export const { setSidebar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
