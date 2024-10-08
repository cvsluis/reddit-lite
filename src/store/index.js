import { configureStore } from "@reduxjs/toolkit";
import subRedditsReducer from "./subRedditsSlice";
import postsReducer from "./postsSlice";

export const store = configureStore({
  reducer: {
    subReddits: subRedditsReducer,
    posts: postsReducer,
  },
});
