import { VolumeUp } from "@mui/icons-material";
import { Box, Grid, LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelection";
import BottomBar from "../Navbar/BottomBar";
import PlayButton from "../TrackList/PlayButton";
import TrackNameWithArtist from "../TrackList/TrackNameWithArtist";
import style from "./Player.module.scss";
import TrackProgress from "./TrackProgress";

let audio: HTMLAudioElement | null;

const Player = () => {
  const { pause, activeTrack, volume, currentTime, durationTime } =
    useTypedSelector((state) => state.player);

  const { pauseTrack, playTrack } = useAction();

  useEffect(() => {
    if (!audio) {
      if (activeTrack) audio = new Audio();
    } else {
      setAudio();
      playTrack();
    }
  }, [activeTrack]);

  const setAudio = () => {
    if (audio) {
      audio.src = activeTrack?.audio as string;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio?.duration as number));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio?.currentTime as number));
      };
    }
  };

  const { setCurrentTime, setVolume, setDuration } = useAction();

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    if (audio) audio.volume = Number(e.target.value) / 100;
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
    if (audio) audio.currentTime = Number(e.target.value);
  };

  const play = () => {
    console.log(pause);
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
        {activeTrack && (
          <>
            <PlayButton isPlay={pause} action={play} />
            <TrackNameWithArtist track={activeTrack} />
          </>
        )}
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
