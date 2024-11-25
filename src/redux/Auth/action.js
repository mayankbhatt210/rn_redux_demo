import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginUser, PostList} from './services'; // Ensure this service function is correctly implemented
import axios from 'axios';

export const loginAction = createAsyncThunk(
  'authSlice/loginAction',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await LoginUser(payload); // Make sure LoginUser handles API calls correctly
      const {data, status, message} = response;

      // Check if API returned a success status
      if (!status) {
        return rejectWithValue(message || 'Login failed');
      }

      return {data, status, message}; // Payload for `fulfilled`
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(
          err.response?.data?.detail || 'Something went wrong',
        );
      }
      return rejectWithValue(err.message || 'Network Error');
    }
  },
);
export const postListAction = createAsyncThunk(
  'post/postListAction',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await PostList(payload); // Make sure LoginUser handles API calls correctly
      const {data, status, message} = response;

      // Check if API returned a success status
      if (!status) {
        return rejectWithValue(message || 'Login failed');
      }

      return {data, status, message}; // Payload for `fulfilled`
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(
          err.response?.data?.detail || 'Something went wrong',
        );
      }
      return rejectWithValue(err.message || 'Network Error');
    }
  },
);
