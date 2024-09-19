import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
      try {
        localStorage.setItem("token", action.payload);
      } catch (error) {
        console.error("Could not save token to localstorage", error);
      }
      console.log(state);
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
      state.token = null; // Clear token
    },
    checkLogin: (state, action) => {
      if (action.payload) {
        state.isLoggedIn = true;
      }
    },
  },
});

export const { login, logout, checkLogin } = authSlice.actions;
export default authSlice.reducer;
