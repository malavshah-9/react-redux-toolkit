import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(counter) {
      counter.value += 1;
    },
  },
});

export const { increment } = CounterSlice.actions;
export default CounterSlice.reducer;
