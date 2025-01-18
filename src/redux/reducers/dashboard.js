// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layoutData: null,
  bets: [],
  betSlipToggle: false,
  userBalance : null,
  isSearchFocused: false,
  selectedCurrency: null,
  isMbIframeFull: false
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
    setBetSlipToggle: (state, action)=>{
      state.betSlipToggle = action.payload;
    },
    setUserBalance: (state, action)=>{
      state.userBalance = action.payload;
    },
    setIsSearchFocused: (state, action)=>{
      state.isSearchFocused = action.payload;
    },
    setSelectedCurrency: (state, action)=>{
      state.selectedCurrency = action.payload;
    },
    setMbIframeFull: (state, action)=>{
      state.isMbIframeFull = action.payload;
    }
    
  },
});

export const { setLayoutData, setBets, setBetSlipToggle, setUserBalance, setIsSearchFocused, setSelectedCurrency, setMbIframeFull } = dashboard.actions;
export default dashboard.reducer;
