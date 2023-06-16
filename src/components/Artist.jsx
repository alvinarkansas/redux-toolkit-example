import React from "react";
import { FaPlay } from "react-icons/fa";

const Artist = ({ artist, onClick }) => {
  return (
    <div className="artist">
      <div className="artist-thumbnail">
        <img src={artist.thumbnail} alt={artist.name} />
        <button className="play-button" onClick={onClick}>
          <FaPlay />
        </button>
      </div>
      <div className="artist-info">
        <strong>{artist.name}</strong>
        <p>Artist</p>
      </div>
    </div>
  );
};

export default Artist;
