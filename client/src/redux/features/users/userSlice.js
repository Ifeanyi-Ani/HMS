import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../../api/base';
// First, create the thunk
export const fetchReceptionist = createAsyncThunk(
  'receptionists',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await API.get('receptionists');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  message: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReceptionist.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [fetchReceptionist.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [fetchReceptionist.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    },
  },
});
export const selectAll = state => state.users?.data;
export default usersSlice;
