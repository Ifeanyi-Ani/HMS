import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './features/users/userSlice';
import authSlice from './features/authSlice';

const rootReducer = combineReducers({
  user: usersSlice.reducer,
  auth: authSlice.reducer,
});
export const Store = configureStore({ reducer: rootReducer });
