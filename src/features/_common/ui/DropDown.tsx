import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface DropDownProps<T extends string> {
  title: string;
  options: T[];
  onChange: (value: T) => void;
}

const DropDown = <T extends string>({ 
  title, 
  options, 
  onChange 
}: DropDownProps<T>) => {
  const [option, setOption] = useState<T>();

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as T;
    setOption(value);
    onChange(value);
  };

  return (
    <FormControl sx={{ minWidth: 150 }}>
      <InputLabel>{title}</InputLabel>
      <Select
        value={option}
        onChange={handleChange}
        label={title}
      >
        <MenuItem value={""}> None</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
