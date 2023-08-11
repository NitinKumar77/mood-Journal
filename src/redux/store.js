import { configureStore } from "@reduxjs/toolkit";
import moodSlice from "./moodSlice";
import loginslice from "./loginslice";
import notificationslice from "./notificationslice";

const store = configureStore({
  reducer: {
    mood: moodSlice.reducer,
    login: loginslice.reducer,
    notification: notificationslice.reducer,
  },
});

export default store;
