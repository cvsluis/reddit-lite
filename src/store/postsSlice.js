import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

const API_ROOT = "https://www.reddit.com";
export const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
  const data = await fetch(`${API_ROOT}/r/home.json`);
  const json = await data.json();
  return json.data.children.map((post) => {
    return post.data;
  });
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.posts = [];
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export const isLoading = (state) => state.posts.isLoading;

export default postsSlice.reducer;
