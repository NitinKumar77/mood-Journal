import { configureStore } from "@reduxjs/toolkit";
import moodSlice from "./moodSlice";
import loginslice from "./loginslice";

const store = configureStore({
  reducer: { mood: moodSlice.reducer, login: loginslice.reducer },
});

export default store;
