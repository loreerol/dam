import React, { createContext, useState } from "react";
import { SortOption } from "../types";

interface SortProviderProps {
  children: React.ReactNode;
}

type SortContextType = {
  sortBy: SortOption | undefined;
  setSortBy: (sort: SortOption) => void;
};

export const SortContext = createContext<SortContextType>({
  sortBy: undefined,
  setSortBy: () => {},
});

export const SortProvider = ({ children }: SortProviderProps) => {
  const [sortBy, setSortBy] = useState<SortOption>();

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};
