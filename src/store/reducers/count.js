import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    changeCount(state, action) {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, changeCount } = countSlice.actions;
export default countSlice.reducer;
