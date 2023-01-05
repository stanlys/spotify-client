import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { ITrack } from "../../interface/tracks";
import MainLayout from "../../Layouts/MainLayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./common.module.scss";
import { useRouter } from "next/router";
import { TRACKS } from "../../MOCK_DATA/tracks";
import Comments from "../../components/TrackList/Comments";
import TrackDetail from "../../components/TrackList/TrackDetail";

interface TrackDetailsProps {
  track: ITrack;
}

const TrackDetails = () => {
  const router = useRouter();
  const track = TRACKS[0];

  return (
    <MainLayout>
      <Box className={style.Header}>
        <Button onClick={() => router.back()}>
          <ArrowBackIosIcon /> Back{" "}
        </Button>
        <Typography>Detail Information</Typography>
      </Box>
      <TrackDetail track={track} />
      <Divider sx={{ mb: 1 }} />
      <Comments track={track} />
    </MainLayout>
  );
};

export default TrackDetails;
