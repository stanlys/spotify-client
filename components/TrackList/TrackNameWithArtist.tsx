import { Grid, Typography } from "@mui/material";
import React from "react";
import { ITrack } from "../../interface/tracks";

interface TrackNameWithArtistProps {
  track: ITrack;
}

const TrackNameWithArtist: React.FC<TrackNameWithArtistProps> = ({ track }) => {
  if (!track) return null;

  return (
    <Grid container direction={"column"}>
      <Typography variant="h5">{track?.name}</Typography>
      <Typography variant="subtitle2" color={"GrayText"}>
        {track?.artist}
      </Typography>
    </Grid>
  );
};

export default TrackNameWithArtist;
