import { IconButton } from "@mui/material";
import React from "react";
import PlayCircle from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

interface PlayButtonProps {
  isPlay: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlay }) => {
  return (
    <IconButton size="large">
      {isPlay ? <PauseCircleIcon /> : <PlayCircle />}
    </IconButton>
  );
};

export default PlayButton;
