import Head from "next/head";
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { PAGE_TITLES } from "../../MOCK_DATA/tracks";

const Albums = () => {
  return (
    <>
      <Head>
        <title>
          {PAGE_TITLES.main} - {PAGE_TITLES.album}
        </title>
      </Head>
      <MainLayout>Albums list</MainLayout>
    </>
  );
};

export default Albums;
