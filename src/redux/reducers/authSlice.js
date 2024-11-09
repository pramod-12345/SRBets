// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, // Default is logged out
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // login: (state, action) => {
    //   state.isLoggedIn = true;
    //   state.user = action.payload; // Can store user info here
    // },
    // logout: (state) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    //   sessionStorage.clear();
    //   localStorage.clear();
    // },
    // setLoader: (state, action) => {
    //   state.loading = action.payload;
    // },
  },
});

export const { login, logout, setLoader } = authSlice.actions;
export default authSlice.reducer;
