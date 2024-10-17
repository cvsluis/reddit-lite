import { configureStore } from "@reduxjs/toolkit";
import subRedditsReducer from "./subRedditsSlice";
import postsReducer from "./postsSlice";
import commentsReducer from './commentsSlice';

export const store = configureStore({
  reducer: {
    subReddits: subRedditsReducer,
    posts: postsReducer,
    comments: commentsReducer
  },
});
