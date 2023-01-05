import { IComment } from "./comment";

export interface ITrack {
  _id: string;
  artist: string;
  name: string;
  text: string;
  listens: number;
  audio: string;
  picture: string;
  comments: IComment[];
}