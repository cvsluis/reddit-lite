import { configureStore } from '@reduxjs/toolkit';
import subRedditsReducer from './subRedditsSlice'

export const store = configureStore({
  reducer: { subReddits: subRedditsReducer},
});