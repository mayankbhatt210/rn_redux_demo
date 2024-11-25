import {createSlice} from '@reduxjs/toolkit';
import {loginAction, postListAction} from './action';

const initialState = {
  isLoading: false,
  userData: null,
  messageToken: '',
  isLoggedIn: false,
  error: null,
};

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    resetToInitialState(state) {
      return initialState;
    },
    setUserToken: (state, {payload}) => {
      state.messageToken = payload;
    },
    setUserData: (state, {payload}) => {
      state.userData = payload;
      state.isLoggedIn = !!payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.userData = payload.data;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginAction.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
        state.isLoggedIn = false;
      })
      .addCase(postListAction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postListAction.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postListAction.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
        state.isLoggedIn = false;
      });
  },
});

export const authApiSliceReducer = AuthSlice.reducer;

// Exporting actions for dispatch
export const {resetToInitialState, setUserToken, setUserData} =
  AuthSlice.actions;
