import { VolumeUp } from "@mui/icons-material";
import { Box, Grid, LinearProgress } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelection";
import { TRACKS } from "../../MOCK_DATA/tracks";
import BottomBar from "../Navbar/BottomBar";
import PlayButton from "../TrackList/PlayButton";
import TrackNameWithArtist from "../TrackList/TrackNameWithArtist";
import style from "./Player.module.scss";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const progress = 5;
  const track = TRACKS[0];

  const { pause, activeTrack, volume, currentTime, durationTime } =
    useTypedSelector((state) => state.player);

  return (
    <BottomBar>
      <Box className={style.player}>
        <PlayButton isPlay={pause} />
        <TrackNameWithArtist track={track} />
        <TrackProgress
          width={"30rem"}
          left={30}
          right={100}
          onChange={() => ({})}
        />
        <VolumeUp />
        <TrackProgress
          width={"10rem"}
          left={30}
          right={100}
          onChange={() => ({})}
        />
      </Box>
    </BottomBar>
  );
};

export default Player;
