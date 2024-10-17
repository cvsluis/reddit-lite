import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  isLoading: false,
  hasError: false,
};

const API_ROOT = "https://www.reddit.com";
export const loadComments = createAsyncThunk("comments/loadComments", async (post, { rejected }) => {
  if (!post) {
    rejected();
  }
  const data = await fetch(`${API_ROOT}${post.permalink}.json`);
  const json = await data.json();
  console.log(json[1].data.children[0].data);
  return json[1].data.children.map((comments) => {
    return comments.data;
  });
});

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(loadComments.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.comments = [];
      });
  },
});

export const selectAllComments = (state) => state.comments.comments;

export const isLoading = (state) => state.comments.isLoading;

export default commentsSlice.reducer;
