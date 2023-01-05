import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./common.module.scss";

const TrackLoader = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Box className={style.Header}>
        <Button onClick={() => router.back()}>
          <ArrowBackIosIcon /> Back{" "}
        </Button>
        <Typography>Track Loader</Typography>
      </Box>
    </MainLayout>
  );
};

export default TrackLoader;
