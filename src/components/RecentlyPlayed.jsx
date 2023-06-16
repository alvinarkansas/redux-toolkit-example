import Song from "./Song";

const PLAYLIST = [
  { title: "On the Night Like This", artist: "Mocca", duration: "1:21" },
  { title: "Every Summertime", artist: "NIKI", duration: "4:48" },
  { title: "In My Life", artist: "The Beatles", duration: "3:00" },
];

const RecentlyPlayed = ({ onSongClick }) => {
  return (
    <section style={{ padding: 32 }}>
      <h2 style={{ marginBottom: 16 }}>Recently Played</h2>

      <div className="playlist">
        {PLAYLIST.map((song, index) => (
          <Song
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            onClick={() => onSongClick(song)}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentlyPlayed;
