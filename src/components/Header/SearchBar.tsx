import React from 'react';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const SearchBar = ({handleChange, label}:SearchBarProps) => (
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
      placeholder={label}
      color='primary'
      aria-label={label}
      onChange={handleChange}
    />
  </div>
);

export default SearchBar;
