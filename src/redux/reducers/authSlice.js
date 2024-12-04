// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, // Default is logged out
  user: null,
  loading: false,
  modalType: null,
  isModalOpen: false,
  registerPayload:{}
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; // Can store user info here
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      sessionStorage.clear();
      localStorage.clear();
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setModalType: (state, action)=>{
      state.modalType = action.payload;
    },
    setRegisterPayload: (state, action)=>{
      state.registerPayload = action.payload;
    },
    toggleModal: (state, action) => {
      state.isModalOpen = action.payload; // true for open, false for close
    },
  },
});

export const { setModalType ,toggleModal, setLoader , login , logout, setRegisterPayload } = authSlice.actions;
export default authSlice.reducer;
