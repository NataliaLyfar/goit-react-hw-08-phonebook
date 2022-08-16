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
    signin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token
      state.isLoggedIn = true;
    },
    signout: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    getCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice;