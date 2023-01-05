import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import style from "./common.module.scss";
import { useRouter } from "next/router";
import { ITrack } from "../../interface/tracks";
import TrackList from "../../components/TrackList/TrackList";

const Tracks = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      artist: "Мара",
      audio: "1",
      picture: "1.jpg",
      text: "1",
      comments: [],
      listens: 1,
      name: "Чё на чём",
    },
  ];

  return (
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
              {/* <input hidden accept="image/*" type="file" /> */}
              <CloudUploadIcon />
            </IconButton>
          </Grid>
          <TrackList tracks={tracks} />
        </Paper>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;
