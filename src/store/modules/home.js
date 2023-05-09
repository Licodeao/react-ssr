import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 100,
  },
  reducers: {
    changeCounterAction(state, { payload }) {
      state.counter += payload;
    },
  },
});

export const { changeCounterAction } = homeSlice.actions;
export default homeSlice.reducer;
