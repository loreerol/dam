import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { SearchBar } from "./SearchBar";

const Header =() =>{
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 'none'}}
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
