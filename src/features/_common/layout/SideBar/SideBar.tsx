import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";

import DropDown from "../../ui/DropDown";

import FavoritesToggle from "../../ui/FavoritesToggle";
import { FileType, SortOption } from "../../../filtering/types";
import { FilterContext } from "../../../filtering/contexts/FilterContext";
import { FavoritesContext } from "../../../filtering/contexts/FavoritesContext";
import Box from "@mui/material/Box";

const drawerWidth = "200px";

const fileTypes: FileType[] = ["Application", "Image", "Video"];
const sortOptions: SortOption[] = [
  "File Size",
  "Created Date",
  "Modified Date",
];

const SideBar = () => {
  const { setFileType, setSortBy } = useContext(FilterContext);
  const { showFavorites, toggleShowFavorites } = useContext(FavoritesContext);

  const drawer = (
    <Box>
      <List>
        <ListItem>
          <DropDown<FileType>
            title="File Type"
            options={fileTypes}
            onChange={setFileType}
          />
        </ListItem>
        <ListItem>
          <DropDown<SortOption>
            title="Sort By"
            options={sortOptions}
            onChange={setSortBy}
          />
        </ListItem>
        <ListItem>
          <FavoritesToggle
            checked={showFavorites}
            onChange={toggleShowFavorites}
          />
        </ListItem>
      </List>
    </Box>
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
