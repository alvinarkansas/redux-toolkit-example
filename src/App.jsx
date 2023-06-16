import { useState } from "react";
import "./App.css";
import NowPlaying from "./components/NowPlaying";
import RecentlyPlayed from "./components/RecentlyPlayed";
import FavArtists from "./components/FavArtists";

const App = () => {
  const [nowPlaying, setNowPlaying] = useState({
    title: "",
    artist: "",
    duration: "",
  });

  return (
    <>
      <RecentlyPlayed onSongClick={(song) => setNowPlaying(song)} />
      <FavArtists onArtistClick={(song) => setNowPlaying(song)} />
      <NowPlaying song={nowPlaying} />
    </>
  );
};

export default App;
