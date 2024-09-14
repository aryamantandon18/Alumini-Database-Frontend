import { configureStore } from '@reduxjs/toolkit';
import alumniDataReducer from './features/alumniDataSlice';

export const store = configureStore({
  reducer: {
    alumniData: alumniDataReducer,
  },
});

