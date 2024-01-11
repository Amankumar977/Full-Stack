import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Fix the spelling here
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState, // Fix the spelling here
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false; // Fix the typo here, change 'true' to 'false'
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
