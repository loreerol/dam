import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

interface SearchBarProps {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const SearchBar = ({handleChange, label}:SearchBarProps) => (
  <Box style={{
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
      placeholder={label}
      color='primary'
      aria-label={label}
      onChange={handleChange}
    />
  </Box>
);

export default SearchBar;
