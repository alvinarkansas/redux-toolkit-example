import { useSelector } from "react-redux";
import "./App.css";
import NowPlaying from "./components/NowPlaying";
import RecentlyPlayed from "./components/RecentlyPlayed";
import FavArtists from "./components/FavArtists";

const App = () => {
  const nowPlaying = useSelector((state) => state.nowPlaying);

  return (
    <>
      <RecentlyPlayed />
      <FavArtists />
      <NowPlaying song={nowPlaying} />
    </>
  );
};

export default App;
