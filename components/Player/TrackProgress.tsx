import { Box } from "@mui/material";
import React from "react";
import style from "./TrackProgress.module.scss";

interface TrackProgressProps {
  width: string;
  left: number;
  right: number;
  onChange: () => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  width,
  onChange,
}) => {
  return (
    <Box className={style.progressBar}>
      <input
        type={"range"}
        className={style.input}
        min={left}
        max={right}
        value={left}
        onChange={onChange}
        width={width}
      />
      <Box width={"4rem"}>
        {left} / {right}
      </Box>
    </Box>
  );
};

export default TrackProgress;
