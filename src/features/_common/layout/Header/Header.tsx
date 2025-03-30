import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "../../ui/SearchBar";
import { FilterContext } from "../../../filtering/contexts/FilterContext";

const Header = () => {
  const { setSearchBy } = useContext(FilterContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBy(event.target.value); 
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 'none' }}
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <SearchBar label={"Search by filename"} handleChange={handleChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;