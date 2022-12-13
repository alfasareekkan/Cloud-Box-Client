import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.user = user;
      // eslint-disable-next-line no-param-reassign
      state.token = accessToken;
    },
    logOut(state) {
      // eslint-disable-next-line no-param-reassign
      state.user = null;
      // eslint-disable-next-line no-param-reassign
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
