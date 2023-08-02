import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  value: 20,
};

export const counterSlice = createSlice({
  name: 'count',
  initialState: initialValue, // Changed from initialValue to initialState
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
