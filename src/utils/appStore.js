import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import moviesReducers from "./moviesSlice.js";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducers,
  },
});

export default appStore;
