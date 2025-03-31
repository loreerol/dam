import React, { createContext, useState } from "react";
import { FileType, SortOption } from "../types";

interface FilterProviderProps {
  children: React.ReactNode;
}

type FilterContextType = {
  fileType: FileType | undefined;
  sortBy: SortOption | undefined;
  searchBy: string;
  setFileType: (type: FileType) => void;
  setSortBy: (sort: SortOption) => void;
  setSearchBy: (sort: string) => void;
};

export const FilterContext = createContext<FilterContextType>({
  fileType: undefined,
  sortBy: undefined,
  searchBy: "",
  setFileType: () => {},
  setSortBy: () => {},
  setSearchBy: () => {},
});

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [fileType, setFileType] = useState<FileType>();
  const [sortBy, setSortBy] = useState<SortOption>();
  const [searchBy, setSearchBy] = useState("");

  return (
    <FilterContext.Provider
      value={{
        fileType,
        sortBy,
        searchBy,
        setFileType,
        setSortBy,
        setSearchBy,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
