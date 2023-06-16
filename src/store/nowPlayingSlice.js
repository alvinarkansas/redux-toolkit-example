import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  artist: "",
  duration: "",
};

export const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    play: (state, action) => {
      state.title = action.payload.title;
      state.artist = action.payload.artist;
      state.duration = action.payload.duration;
    },
  },
});

export const { play } = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
