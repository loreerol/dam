import React, { createContext, useState } from "react";
import { FileType, Filter } from "../types";

interface FilterProviderProps {
    children: React.ReactNode
}

type FilterContextType = {
  fileType: FileType | undefined;
  sortBy: Filter | undefined;
  searchBy: string;
  setFileType: (type: FileType) => void;
  setSortBy: (sort: Filter) => void;
  setSearchBy: (sort: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  fileType: undefined,
  sortBy: undefined,
  searchBy: "",
  setFileType: () => {},
  setSortBy: () => {},
  setSearchBy: () => {}
});

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [fileType, setFileType] = useState<FileType>();
  const [sortBy, setSortBy] = useState<Filter>();
  const [searchBy, setSearchBy] = useState("");

  return (
    <FilterContext.Provider value={{ fileType, sortBy, searchBy, setFileType, setSortBy, setSearchBy }}>
      {children}
    </FilterContext.Provider>
  );
};

