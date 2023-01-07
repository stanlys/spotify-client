import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import style from "./styles/common.module.scss";
import Navbar from "../components/Navbar/Navbar";
import MainLayout from "../Layouts/MainLayout";
import { PAGE_TITLES } from "../MOCK_DATA/tracks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLES.main}</title>
      </Head>
      <MainLayout>
        <Box className={style.caption}>
          <Typography variant="h1" sx={{ fontWeight: 700 }}>
            SPOTIFY
          </Typography>
          <Typography variant="h4">The best MUSIC here</Typography>
        </Box>
      </MainLayout>
    </>
  );
}
