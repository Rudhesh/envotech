// passwordResetSlice.ts
import { User } from '@/types/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { userData } from '../../../actions/actions';

interface userData {
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
  user: User[];
}

const initialState: userData = {
  status: 'idle',
  error: null,
  user: []
};


export const fetchUserData = createAsyncThunk<User[]>(
  'data/fetchDataElements',
  async () => {

    try {
      const data = userData()
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const userDataItem = createSlice({
  name: 'passwordReset',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled,  (state, action: PayloadAction<User[]>) => {
        state.status = 'loading';
        state.user = action.payload;
        state.error = '';
      },)
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message as string;
      });
  },
});

export default userDataItem.reducer;
