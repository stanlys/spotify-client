import { ITrack } from "../interface/tracks";

export const PAGE_TITLES = {
  main: "My Spotify",
  album: "Albums list",
};

export const TRACKS: ITrack[] = [
  {
    _id: "1",
    artist: "Мара",
    audio:
      "http://localhost:3005/audio/5afc6fdb-2a40-4794-8d80-ee5812fa0feb.mp3",
    picture:
      "http://localhost:3005/image/4bf1d0f4-9d6e-430f-9cee-0c0993fc26d8.jpg",
    text: "1",
    comments: [],
    listens: 1,
    name: "Чё на чём",
  },
];
