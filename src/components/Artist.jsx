import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdEqualizer } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { play } from "../store/nowPlayingSlice";

const Artist = ({ artist }) => {
  const nowPlaying = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();

  return (
    <div className="artist">
      <div className="artist-thumbnail">
        <img src={artist.thumbnail} alt={artist.name} />
        <button
          className="play-button"
          onClick={() => dispatch(play(artist.featuredSong))}
        >
          <FaPlay />
        </button>
      </div>
      <div className="artist-info">
        <strong>{artist.name}</strong>
        <div>
          <p>Artist</p>
          {nowPlaying.title === artist.featuredSong.title && (
            <MdEqualizer color="#0ebc3f" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Artist;
