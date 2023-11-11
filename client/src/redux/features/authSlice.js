import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api/base';

const initialState = {
  currentUser: null,
  isLoading: false,
  isSuccess: false,
  message: null,
};
export const signIn = createAsyncThunk(
  'auth/singin',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await API.post('login', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.pending]: (state, _) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.currentUser = null;
      state.message = null;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload;
      state.isSuccess = true;
      state.message = null;
    },
    [signIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
      state.currentUser = null;
    },
  },
});

export const loggedUser = state => state.auth;
export default authSlice;
