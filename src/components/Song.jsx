import React from "react";
import { MdEqualizer } from "react-icons/md";

const Song = ({ title, artist, duration, onClick }) => {
  return (
    <div className="song" onClick={onClick}>
      <div>
        <MdEqualizer color="#0ebc3f" />
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
