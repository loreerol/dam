import React, { useContext } from "react";
import Box from "@mui/material/Box";

import Header from "../features/_common/layout/Header";
import SideBar from "../features/_common/layout/SideBar";
import GalleryPage from "../features/CardGallery/CardGallery";

import { FilterContext } from "../features/filtering/contexts/FilterContext";
import { FavoritesContext } from "../features/filtering/contexts/FavoritesContext";
import useFilteredData from "../features/filtering/hooks/useFilteredData";
import useSortedData from "../features/filtering/hooks/useSortedData";
import { useAssets } from "../hooks";

const App = () => {
  const { fileType, sortBy, searchBy } = useContext(FilterContext);
  const { favorites, showFavorites } = useContext(FavoritesContext);
  const { data: assets, isLoading, error } = useAssets();

  const filteredData = useFilteredData({
    assets,
    fileType,
    searchBy,
    favorites,
    showFavorites,
  });
  const sortedData = useSortedData({ data: filteredData, sortBy });

  return (
    <Box display="flex">
      <Header />
      <SideBar />

      <GalleryPage data={sortedData} loading={isLoading} error={error} />
    </Box>
  );
};

export default App;
