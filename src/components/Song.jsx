import React from "react";
import { MdEqualizer } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { play } from "../store/nowPlayingSlice";

const Song = ({ title, artist, duration }) => {
  const nowPlaying = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();

  return (
    <div
      className="song"
      onClick={() => dispatch(play({ title, artist, duration }))}
    >
      <div>
        {nowPlaying.title === title && <MdEqualizer color="#0ebc3f" />}
        <div className="song-info">
          <p>{title}</p>
          <p>by {artist}</p>
        </div>
      </div>
      <span>{duration}</span>
    </div>
  );
};

export default Song;
