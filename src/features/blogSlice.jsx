import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    comments: [],
    categories: [],
    likes: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },
    // getProCatBrandSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.products = payload[0];
    //   state.categories = payload[1];
    //   state.brands = payload[2];
    // },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getSuccess } = blogSlice.actions;
export default blogSlice.reducer;
