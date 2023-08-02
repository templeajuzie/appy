import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../ReduxSlice/CountSlice'; 

const StoreKit = configureStore({
  reducer: {
    counter: counterSlice, // Changed from countSlice to counterSlice

  }
});

export default StoreKit;
