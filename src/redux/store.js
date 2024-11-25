// redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './index'; // Import root reducer

const store = configureStore({
  reducer: rootReducer, // Pass combined reducers here
});

export default store;
