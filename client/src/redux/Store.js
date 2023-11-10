import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './features/users/userSlice';

const rootReducer = combineReducers({
  user: usersSlice.reducer,
});
export const Store = configureStore({ reducer: rootReducer });
