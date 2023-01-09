import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import style from "./common.module.scss";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList/TrackList";
import { TRACKS } from "../../MOCK_DATA/tracks";
import { useTypedSelector } from "../../hooks/useTypedSelection";
import { useAction } from "../../hooks/useAction";
import Head from "next/head";
import { AppThunk, wrapper } from "../../store";
import { addAbortSignal } from "stream";
import { fetchTrack } from "../../store/actions/tracks";
import { TrackActionTypes } from "../../interface/tracks";

const Tracks = () => {
  const router = useRouter();
  // const { tracks, error } = useTypedSelector((state) => state.tracks);

  return (
    <>
      <Head>
        <title> My Spotify</title>
      </Head>
      <MainLayout>
        <Grid container>
          <Paper elevation={24} className={style.TrackListWrapper}>
            <Grid container justifyContent="space-between">
              <Typography variant="h4">Tracks List</Typography>
              <IconButton
                color="primary"
                component="label"
                onClick={() => router.push("/tracks/create")}
              >
                <CloudUploadIcon />
              </IconButton>
            </Grid>
            <TrackList tracks={TRACKS} />
          </Paper>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Tracks;
