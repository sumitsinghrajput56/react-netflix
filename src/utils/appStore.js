import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import moviesReducers from "./moviesSlice.js";
import gptReducer from "./gptSlice.js";
import configReducer from "./configSlice.js";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducers,
    gpt: gptReducer,
    config: configReducer
  },
});

export default appStore;
