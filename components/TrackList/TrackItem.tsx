import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { ITrack } from "../../interface/tracks";
import Checkbox from "@mui/material/Checkbox";
import style from "./TrackItem.module.scss";
import PlayButton from "./PlayButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { useRouter } from "next/router";

interface TrackItemProps {
  track: ITrack;
  isPlay?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, isPlay = false }) => {
  const router = useRouter();

  return (
    <Box
      className={style.trackItem}
      onClick={() => router.push(`/tracks/${track._id}`)}
    >
      <Box className={style.trackItemElement}>
        <PlayButton isPlay={isPlay} />
        <img alt={track.name} height={50} width={50} src={track.picture} />
        <Grid container direction={"column"}>
          <Typography variant="h5">{track.name}</Typography>
          <Typography variant="subtitle2" color={"GrayText"}>
            {track.artist}
          </Typography>
        </Grid>
      </Box>
      <Box className={style.trackItemElement}>
        <Box>
          {isPlay && <Typography color={"GrayText"}> 3:45 / 6:50 </Typography>}
        </Box>
        <IconButton
          className={style.btnDelete}
          onClick={(e) => e.stopPropagation()}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TrackItem;
