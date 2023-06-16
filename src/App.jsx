import { useState } from "react";
import "./App.css";
import Song from "./components/Song";
import NowPlaying from "./components/NowPlaying";

const PLAYLIST = [
  { title: "On the Night Like This", artist: "Mocca", duration: "1:21" },
  { title: "Every Summertime", artist: "NIKI", duration: "4:48" },
  { title: "In My Life", artist: "The Beatles", duration: "3:00" },
];

const App = () => {
  const [nowPlaying, setNowPlaying] = useState({ title: "", artist: "", duration: "" });

  return (
    <>
      <section>
        <h2 style={{ marginBottom: 16 }}>Recently Played</h2>

        <div className="playlist">
          {PLAYLIST.map((song, index) => (
            <Song
              key={index}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              onClick={() => setNowPlaying(song)}
            />
          ))}
        </div>
      </section>

      <NowPlaying song={nowPlaying} />
    </>
  );
};

export default App;
