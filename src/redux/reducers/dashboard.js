// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layoutData: null,
  bets: []
};

const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setLayoutData: (state, action) => {
      state.layoutData = action.payload; // true for open, false for close
    },
    setBets: (state, action) => {
      state.bets = action.payload; // true for open, false for close
    },
  },
});

export const { setLayoutData, setBets } = dashboard.actions;
export default dashboard.reducer;
