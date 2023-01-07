import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import PlayCircle from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useAction } from "../../hooks/useAction";
import { TRACKS } from "../../MOCK_DATA/tracks";

interface PlayButtonProps {
  isPlay: boolean;
  action: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlay, action }) => {
  return (
    <IconButton
      size="large"
      onClick={(e) => {
        e.stopPropagation();
        action();
      }}
    >
      {!isPlay ? <PauseCircleIcon /> : <PlayCircle />}
    </IconButton>
  );
};

export default PlayButton;
