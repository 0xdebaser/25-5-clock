import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    breakLength: 5,
    currentSegment: "session",
    sessionLength: 25,
    timeLeft: 25 * 60,
  },
  reducers: {
    setBreakLength: (state, action) => {
      state.breakLength = action.payload;
    },
    setCurrentSegment: (state, action) => {
      state.currentSegment = action.payload;
    },
    setSessionLength: (state, action) => {
      state.sessionLength = action.payload;
    },
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
  },
});

export const {
  setBreakLength,
  setCurrentSegment,
  setSessionLength,
  setTimeLeft,
} = timerSlice.actions;

export default timerSlice.reducer;
