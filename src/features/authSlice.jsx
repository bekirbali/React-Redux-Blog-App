import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  currentUser: null,
  isAdmin: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },
    loginSuccess(state, { payload }) {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.currentUser = payload?.user?.is_admin;
      state.currentUser = payload?.key;
    },
    registerSuccess(state, { payload }) {
      state.loading = false;
      state.currentUser = payload?.username;
      state.currentUser = payload?.token;
      state.error = false;
    },
    logoutSuccess(state) {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
      state.token = null;
    },
    fetchFail(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
