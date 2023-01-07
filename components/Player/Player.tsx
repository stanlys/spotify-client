import { VolumeUp } from "@mui/icons-material";
import { Box, Grid, LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelection";
import { TRACKS } from "../../MOCK_DATA/tracks";
import BottomBar from "../Navbar/BottomBar";
import PlayButton from "../TrackList/PlayButton";
import TrackNameWithArtist from "../TrackList/TrackNameWithArtist";
import style from "./Player.module.scss";
import TrackProgress from "./TrackProgress";

let audio: HTMLAudioElement | null;

const Player = () => {
  const progress = 5;
  const track = TRACKS[0];

  useEffect(() => {
    if (!audio) {
      audio = new Audio(TRACKS[0].audio);
    } else {
      setAudio();
    }
  }, []);

  const setAudio = () => {
    if (activeTrack && audio) {
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio?.duration as number));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio?.currentTime as number));
      };
    }
  };

  const { pause, activeTrack, volume, currentTime, durationTime } =
    useTypedSelector((state) => state.player);

  const { setCurrentTime, setVolume, setDuration } = useAction();

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    if (audio) audio.volume = Number(e.target.value) / 100;
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
    if (audio) audio.currentTime = Number(e.target.value);
  };

  const { pauseTrack, playTrack } = useAction();

  const play = () => {
    if (pause) {
      playTrack();
      if (audio) audio.play();
    } else {
      pauseTrack();
      if (audio) audio.pause();
    }
  };

  return (
    <BottomBar>
      <Box className={style.player}>
        <PlayButton isPlay={pause} action={play} />
        <TrackNameWithArtist track={track} />
        <TrackProgress
          width={"30rem"}
          left={currentTime}
          right={durationTime}
          onChange={changeCurrentTime}
        />
        <VolumeUp />
        <TrackProgress
          width={"10rem"}
          left={volume}
          right={100}
          onChange={changeVolume}
        />
      </Box>
    </BottomBar>
  );
};

export default Player;
