import axios from "axios";
import { Dispatch } from "react";
import { TrackAction, TrackActionTypes } from "../../interface/tracks";

const BASE_URL = "http://localhost:3005/tracks";

export const fetchTrack = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(BASE_URL);
      dispatch({ type: TrackActionTypes.GET_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.GET_TRACKS_ERROR,
        payload: "Failed loading tracks",
      });
    }
  };
};
