import {
  ITrack,
  TrackAction,
  TrackActionTypes,
  TrackState,
} from "../../interface/tracks";

const initialState: TrackState = {
  tracks: [],
  error: "",
};

export const trackReducer = (
  state = initialState,
  action: TrackAction
): TrackState => {
  switch (action.type) {
    case TrackActionTypes.GET_TRACKS_ERROR:
      return { ...state, error: action.payload };
    case TrackActionTypes.GET_TRACKS:
      return { error: "", tracks: action.payload };
    case TrackActionTypes.GET_TRACKS:
      return state;
  }
};
