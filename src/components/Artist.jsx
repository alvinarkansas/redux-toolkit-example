import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdEqualizer } from "react-icons/md";

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
        <div>
          <p>Artist</p>
          <MdEqualizer color="#0ebc3f" />
        </div>
      </div>
    </div>
  );
};

export default Artist;
