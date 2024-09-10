import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = true;
      console.log(state);
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
    checkLogin: (state) => {
      const token = localStorage.getItem("token");
      state.isLoggedIn = !!token;
    },
  },
});

export const { login, logout, checkLogin } = authSlice.actions;
export default authSlice.reducer;
