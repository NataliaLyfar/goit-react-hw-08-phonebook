import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: { name: null, email: null},
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token
      state.isLoggedIn = true;
    },
    unsetCredentials: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, unsetCredentials } = authSlice.actions;
export default authSlice;