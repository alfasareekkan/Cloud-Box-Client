/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const iconSlice = createSlice({
  name: 'icon',
  initialState: { notification: false, userProfile: false },
  reducers: {
    setNotification: (state, action) => {
      state.notification = action.payload;
      state.userProfile = false;
    },
    setUserProfile: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.notification = false;
      state.userProfile = action.payload;
    },
  },

});
export const { setNotification, setUserProfile } = iconSlice.actions;
export default iconSlice.reducer;
