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
      "http://localhost:3005/audio/56884d29-a3a8-4f79-b132-811f6ab31e2d.mp3",
    picture:
      "http://localhost:3005/image/55874b24-5a15-4b10-9d00-b29020ec1635.jpg",
    text: "1",
    comments: [],
    listens: 1,
    name: "Чё на чём",
  },
];
