/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  token: null,
  isLoggedin: false,
  isloading: false,
  id: null,
  error: null,
  res_Id: null,
};
const BackendUrl = 'http://localhost:5000/api/v2/auth';

export const login = createAsyncThunk('auth', async (body) => {
  try {
    const response = await axios.post(`${BackendUrl}/login`, body);
    console.log('res login ', response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

// export const signup = createAsyncThunk('auth', async (body) => {
//   try {
//     const response = await axios.post(`${BackendUrl}/signup`, body);
//     console.log('response signup', response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setforgetid: (state, action) => {
      console.log('first', action.payload);
      state.res_Id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        console.log('pending');
        state.isloading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('full payload', action.payload);
        state.token = action.payload?.data?.bearertoken;
        state.id = action.payload?.data?._id;
        state.isloading = false;
        state.isLoggedin = true;
        state.error = action.payload?.Error;
      })
      .addCase(login.rejected, (state, action) => {
        state.isloading = false;
        state.isLoggedin = false;
      });
  },
});

export const { extraReducers, setforgetid } = authSlice.actions;
export default authSlice.reducer;
