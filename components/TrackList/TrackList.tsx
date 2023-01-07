import { Box, Grid } from "@mui/material";
import React from "react";
import { ITrack } from "../../interface/tracks";
import TrackItem from "./TrackItem";

interface TrackListProps {
  tracks: Array<ITrack>;
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} audio={null} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
