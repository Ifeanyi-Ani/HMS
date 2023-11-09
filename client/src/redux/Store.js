import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/userSlice';

export const Store = configureStore({
  reducer: {
    counterSlice,
  },
});
