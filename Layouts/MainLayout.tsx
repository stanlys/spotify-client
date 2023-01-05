import { Container } from "@mui/material";
import React, { FC, PropsWithChildren, ReactElement } from "react";
import BottomBar from "../components/Navbar/BottomBar";
import Navbar from "../components/Navbar/Navbar";
import style from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: any;
}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container className={style.wrapper}>{children}</Container>
      <BottomBar />
    </>
  );
};

export default MainLayout;
