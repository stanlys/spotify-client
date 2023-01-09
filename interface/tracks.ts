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

export interface TrackState {
  tracks: ITrack[];
  error: string;
}

export enum TrackActionTypes {
  GET_TRACKS = "GET_TRACKS",
  GET_TRACKS_ERROR = "GET_TRACKS_ERROR",
}

interface GetTracksAction {
  type: TrackActionTypes.GET_TRACKS;
  payload: ITrack[];
}

interface GetTracksErrorAction {
  type: TrackActionTypes.GET_TRACKS_ERROR;
  payload: string;
}

export type TrackAction = GetTracksAction | GetTracksErrorAction;
