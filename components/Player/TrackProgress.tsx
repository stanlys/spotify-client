import { Box } from "@mui/material";
import React from "react";
import style from "./TrackProgress.module.scss";

interface TrackProgressProps {
  width: string;
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        min={0}
        max={right}
        value={left}
        onChange={onChange}
        style={{ width: width }}
      />
      <Box width={"4.6rem"}>
        {left} / {right}
      </Box>
    </Box>
  );
};

export default TrackProgress;
