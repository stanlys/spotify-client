import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import PlayCircle from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useAction } from "../../hooks/useAction";
import { TRACKS } from "../../MOCK_DATA/tracks";

interface PlayButtonProps {
  isPlay: boolean;
}
let audio: HTMLAudioElement | null;

const PlayButton: React.FC<PlayButtonProps> = ({ isPlay }) => {
  const { pauseTrack, playTrack } = useAction();

  useEffect(() => {
    if (!audio) {
      audio = new Audio(TRACKS[0].audio);
      // audio.src = ;
    }
  }, []);

  const play = () => {
    if (isPlay) {
      playTrack();
      if (audio) audio.play();
    } else {
      pauseTrack();
      if (audio) audio.pause();
    }
  };

  return (
    <IconButton size="large" onClick={play}>
      {isPlay ? <PauseCircleIcon /> : <PlayCircle />}
    </IconButton>
  );
};

export default PlayButton;
