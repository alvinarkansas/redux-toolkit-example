import React from "react";
import Artist from "./Artist";

const FAV_ARTISTS = [
  {
    name: "MALIQ & D'Essentials",
    thumbnail:
      "https://i.scdn.co/image/ab6761610000e5eb6f5044aae066797f015c74f3",
    featuredSong: {
      title: "Himalaya",
      artist: "MALIQ & D'Essentials",
      duration: "2:58",
    },
  },
  {
    name: "Coldplay",
    thumbnail:
      "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3",
    featuredSong: {
      title: "Adventure of A Lifetime",
      artist: "Coldplay",
      duration: "3:22",
    },
  },
  {
    name: "YOASOBI",
    thumbnail:
      "https://i.scdn.co/image/ab6761610000e5ebfbe071f5bc42f38d3485a29a",
    featuredSong: {
      title: "優しい彗星",
      artist: "YOASOBI",
      duration: "3:35",
    },
  },
  {
    name: "Mondo Gascaro",
    thumbnail:
      "https://i.scdn.co/image/ab6761610000e5ebcfffbe0b8529845dfd8d7804",
    featuredSong: {
      title: "Apatis",
      artist: "Mondo Gascaro",
      duration: "4:04",
    },
  },
  {
    name: "Rex Orange County",
    thumbnail:
      "https://i.scdn.co/image/ab6761610000e5ebffb90f91cb2f487d7309f7bc",
    featuredSong: {
      title: "Sunflower",
      artist: "Rex Orange County",
      duration: "3:18",
    },
  },
];

const FavArtists = ({ onArtistClick }) => {
  return (
    <section style={{ paddingBlock: 32 }}>
      <h2 style={{ marginBottom: 16, paddingLeft: 32 }}>
        Your favorite artists
      </h2>

      <div className="horizontal-list">
        {FAV_ARTISTS.map((artist, index) => (
          <Artist
            key={index}
            artist={artist}
            onClick={() => onArtistClick(artist.featuredSong)}
          />
        ))}
      </div>
    </section>
  );
};

export default FavArtists;
