import { AppBar, Box, CssBaseline, IconButton, Toolbar } from "@mui/material";
import React, { ReactElement } from "react";

interface BottomBarProps {
  children: ReactElement;
}

const BottomBar: React.FC<BottomBarProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </>
  );
};

export default BottomBar;
