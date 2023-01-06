import {
  PlayerAction,
  PlayerActionTypes,
  PlayerState,
} from "../../interface/player";

export const initialState: PlayerState = {
  activeTrack: null,
  currentTime: 0,
  durationTime: 0,
  pause: true,
  volume: 0,
};

export const playerReducer = (
  state = initialState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.PLAY:
      return { ...state, pause: false };
    case PlayerActionTypes.PAUSE:
      return { ...state, pause: true };
    case PlayerActionTypes.SET_ACTIVE:
      return {
        ...state,
        activeTrack: action.payload,
        durationTime: 0,
        currentTime: 0,
      };
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionTypes.SET_DURATION:
      return { ...state, durationTime: action.payload };
    case PlayerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
