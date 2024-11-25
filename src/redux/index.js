// redux/index.js
import {authApiSliceReducer} from './Auth/AuthSlice';
import {burgerDataSliceReducer} from './Burger/burgerReducer';

const rootReducer = {
  auth: authApiSliceReducer, // Key for Auth state
  burger: burgerDataSliceReducer,
};

export default rootReducer;
