import {createSlice} from '@reduxjs/toolkit';

const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    numberOfBurger: 0,
  },
  reducers: {
    increaseBurger: (state, action) => {
      state.numberOfBurger += action.payload;
    },
    decreaseBurger: state => {
      if (state.numberOfBurger > 0) state.numberOfBurger -= 1;
    },
  },
});

export const {increaseBurger, decreaseBurger, resetToInitialState} =
  burgerSlice.actions;

export const burgerDataSliceReducer = burgerSlice.reducer;
