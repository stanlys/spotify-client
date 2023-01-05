import { Box, Button, Card, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import style from "./common.module.scss";

const Tracks = () => {
  return (
    <MainLayout>
      <Grid container>
        <Box className={style.TrackListWrapper}>
          <Grid container justifyContent="space-between">
            <Typography variant="h4">Tracks List</Typography>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <CloudUploadIcon />
            </IconButton>
          </Grid>
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;
