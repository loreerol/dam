import React from 'react';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => (
  <div style={{
    display: 'flex', 
    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
    borderRadius: 4, 
    padding: '2px 8px', 
    width: '50%'
  }}>
    <IconButton sx={{ padding: 0 }}>
      <SearchIcon sx={{color: "white"}} />
    </IconButton>
    <InputBase
      placeholder="Search By Filename"
      sx={{ ml: 1, flex: 1, color: 'inherit' }}
      inputProps={{ 'aria-label': 'search' }}
    />
  </div>
);

export { SearchBar };
