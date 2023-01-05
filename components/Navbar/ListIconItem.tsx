import {
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface ListItemsProp {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  link: string;
}

const ListIconItem: FC<ListItemsProp> = ({ text, icon, link }) => {
  const router = useRouter();
  return (
    <ListItem
      key={text}
      disablePadding
      onClick={() => {
        router.push(link);
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <Icon component={icon} />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListIconItem;
