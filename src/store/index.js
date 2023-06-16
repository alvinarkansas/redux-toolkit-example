import { configureStore } from "@reduxjs/toolkit";
import nowPlayingSlice from "./nowPlayingSlice";

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingSlice,
  },
});
