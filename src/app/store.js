import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../components/timerSlice";

export default configureStore({
  reducer: {
    timer: timerReducer,
  },
});
