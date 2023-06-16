import React from "react";

const Song = ({ title, artist, duration, onClick }) => {
  return (
    <div className="song" onClick={onClick}>
      <div>
        <p>{title}</p>
        <p>by {artist}</p>
      </div>
      <span>{duration}</span>
    </div>
  );
};

export default Song;
