import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";

import DropDown from "./DropDown";
import { FilterContext } from "../../contexts/FilterContext";
import { FileType, Filter } from "../types";
import FavoritesToggle from "./FavoritesToggle";
import { FavoritesContext } from "../../contexts/FavoritesContext";

const drawerWidth = "200px";

const fileTypes: FileType[] = ["Application", "Image", "Video"];
const sortOptions: Filter[] = ["File Size", "Created Date", "Modified Date"];

const SideBar = () => {
  const { setFileType, setSortBy } = useContext(FilterContext);
  const {showFavorites, toggleShowFavorites} = useContext(FavoritesContext);
  

  const drawer = (
    <div>
      <List>
        <ListItem>
          <DropDown<FileType>
            title="File Type"
            options={fileTypes}
            onChange={setFileType}
          />
        </ListItem>
        <ListItem>
          <DropDown<Filter>
            title="Sort By"
            options={sortOptions}
            onChange={setSortBy}
          />
        </ListItem>
        <ListItem>
          <FavoritesToggle checked={showFavorites} onChange={toggleShowFavorites}/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth },
      }}
    >
      <Toolbar />
      {drawer}
    </Drawer>
  );
};
export default SideBar;
