import { configureStore } from '@reduxjs/toolkit';
import issueReducer from '../features/issueSlice';

export const store = configureStore({
  reducer: {
    issue: issueReducer,
  },
});
