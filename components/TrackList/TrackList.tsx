import { Box, Grid } from "@mui/material";
import Head from "next/head";
import React from "react";
import { ITrack } from "../../interface/tracks";
import TrackItem from "./TrackItem";

interface TrackListProps {
  tracks: Array<ITrack>;
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <>
    <Head>
      <title>Музыкальная коллекция</title>
    </Head>
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} audio={null} />
        ))}
      </Box>
    </Grid>
    </>
  );
};

export default TrackList;
