import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   error: false,
//   currentUser: null,
//   isAdmin: false,
//   token: null,
// };

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: false,
    currentUser: null,
    image: null,
    bio: null,
    email: null,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.isAdmin = payload?.user?.is_admin;
      state.token = payload?.key;
      state.image = payload?.user?.image;
      state.email = payload?.user?.email;
      state.bio = payload?.user?.bio;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.error = false;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
      state.token = null;
    },
    fetchFail: (state) => {
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
