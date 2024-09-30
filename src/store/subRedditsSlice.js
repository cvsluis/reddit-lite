import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  subReddits: [],
  isLoading: false,
  hasError: false
};

const API_ROOT = "https://www.reddit.com";
export const loadSubReddits = createAsyncThunk(
  'subReddits/loadSubReddits',
  async () => {
    const data = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await data.json();
    return json.data.children.map(subReddit => { return subReddit.data.title; });
  }
);

export const subRedditsSlice = createSlice({
  name: 'subReddits',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      loadSubReddits.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSubReddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subReddits = action.payload;
      })
      .addCase(loadSubReddits.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.subReddits = [];
      });
  }
});

export const selectAllSubReddits = (state) => state.subReddits.subReddits;

export const isLoading = (state) => state.subReddits.isLoading;

export default subRedditsSlice.reducer;