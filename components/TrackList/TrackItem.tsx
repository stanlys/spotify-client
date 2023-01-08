import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { ITrack } from "../../interface/tracks";
import Checkbox from "@mui/material/Checkbox";
import style from "./TrackItem.module.scss";
import PlayButton from "./PlayButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { useRouter } from "next/router";
import TrackNameWithArtist from "./TrackNameWithArtist";
import { useTypedSelector } from "../../hooks/useTypedSelection";
import { useAction } from "../../hooks/useAction";
import Head from "next/head";

interface TrackItemProps {
  audio: HTMLAudioElement | null;
  track: ITrack;
  isPlay?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({
  audio,
  track,
  isPlay = false,
}) => {
  const router = useRouter();
  const { setTrack } = useAction();

  const play = () => {
    console.log('Set active track');
    setTrack(track);
  };

  return (
    <>
      <Box
        className={style.trackItem}
        onClick={() => router.push(`/tracks/${track._id}`)}
      >
        <Box className={style.trackItemElement}>
          <PlayButton isPlay={isPlay} action={play} />
          <img alt={track.name} height={50} width={50} src={track.picture} />
          <TrackNameWithArtist track={track} />
        </Box>
        <Box className={style.trackItemElement}>
          <Box>
            {isPlay && (
              <Typography color={"GrayText"}> 3:45 / 6:50 </Typography>
            )}
          </Box>
          <IconButton
            className={style.btnDelete}
            onClick={(e) => e.stopPropagation()}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default TrackItem;
