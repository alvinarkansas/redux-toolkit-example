import React from "react";

const NowPlaying = ({ song }) => {
  return (
    <section id="now-playing">
      <p>Now playing</p>
      <h2>🎵 {song.title}</h2>
      <p>{song.artist}</p>
    </section>
  );
};

export default NowPlaying;
