import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface DropDownProps<T extends string> {
  title: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
}

const DropDown = <T extends string>({ title, options, value, onChange }: DropDownProps<T>) => (
  <FormControl sx={{ minWidth: 150 }}>
    <InputLabel>{title}</InputLabel>
    <Select value={value || ""} onChange={(e: SelectChangeEvent) => onChange(e.target.value as T)} label={title}>
      <MenuItem value="">None</MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default DropDown;