import { configureStore } from "@reduxjs/toolkit";
import moodSlice from "./moodSlice";

const store = configureStore({
  reducer: { mood: moodSlice.reducer },
});

export default store;
