import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";


import DropDown from "./DropDown";

const drawerWidth = "200px";

const fileTypes = ["Application", "Image", "Video"];
const sortOptions = ["File Size", "Created Date", "Modified Date"];

const SideBar = () => {
  const drawer = (
    <div>
      <List>
      <ListItem>
        <DropDown title={"File Type"} options={fileTypes} />
      </ListItem>
        <ListItem>
          <DropDown title={"Sort By"} options={sortOptions} />
        </ListItem>
      </List>

    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth},
      }}
    >
      <Toolbar />
      {drawer}
    </Drawer>
  );
};
export default SideBar;
