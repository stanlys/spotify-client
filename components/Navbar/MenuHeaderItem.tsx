import { IconButton, styled, useTheme } from "@mui/material";
import React, { FC } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface MenuHeaderItemProps {
  close: () => void;
}

const MenuHeaderItem: FC<MenuHeaderItemProps> = ({ close }) => {
  const theme = useTheme();
  return (
    <DrawerHeader>
      <IconButton onClick={close}>
        {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  );
};

export default MenuHeaderItem;
