import {
  Typography,
  Box,
  Button,
  Grid,
  Divider,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./common.module.scss";
import StepWrapper from "../../components/StepWrapper/StepWrapper";
import FileUpload from "../../components/StepWrapper/FileUpload";

const TrackLoader = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(0);

  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    if (page < 2) setPage((page) => page + 1);
  };

  const back = () => {
    if (page > 0) setPage((page) => page - 1);
  };

  return (
    <MainLayout>
      <Box className={style.Header}>
        <Button onClick={() => router.back()}>
          <ArrowBackIosIcon /> Back{" "}
        </Button>
        <Typography>Track Loader</Typography>
      </Box>
      <StepWrapper activeStep={page}>
        <Box>
          <Typography color="GrayText">Step{page + 1}</Typography>
          <Divider />
          {page == 0 && (
            <Grid container direction={"column"} sx={{ p: 1 }} gap={1}>
              <TextField fullWidth label={"Track name"}></TextField>
              <TextField fullWidth label={"Artist"}></TextField>
              <TextField
                fullWidth
                label={"Track text"}
                multiline
                rows={3}
              ></TextField>
            </Grid>
          )}
          {page == 1 && (
            <FileUpload
              caption={"Upload image"}
              file={""}
              setFile={setPicture}
              accept={"image/*"}
            >
              <p>1</p>
            </FileUpload>
          )}
          {page == 2 && (
            <FileUpload
              caption={"Upload track"}
              file={""}
              setFile={setAudio}
              accept={"audio/*"}
            >
              <p>1</p>
            </FileUpload>
          )}
        </Box>
      </StepWrapper>
      <Grid container justifyContent={"space-between"}>
        <Button disabled={page == 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default TrackLoader;
