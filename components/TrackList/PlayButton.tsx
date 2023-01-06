import { IconButton } from "@mui/material";
import React from "react";
import PlayCircle from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useAction } from "../../hooks/useAction";

interface PlayButtonProps {
  isPlay: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlay }) => {
  const { pauseTrack, playTrack } = useAction();
  const play = () => {
    console.log("click on button", isPlay);
    if (isPlay) {
      playTrack();
    } else {
      pauseTrack();
    }
  };

  return (
    <IconButton size="large" onClick={play}>
      {isPlay ? <PauseCircleIcon /> : <PlayCircle />}
    </IconButton>
  );
};

export default PlayButton;
