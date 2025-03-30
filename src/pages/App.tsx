import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { Asset } from "../types";
import mockData from "../mockData";
import Header from "../features/_common/layout/Header";
import SideBar from "../features/_common/layout/SideBar";
import GalleryPage from "../features/CardGallery/CardGallery";

import { FilterContext } from "../features/filtering/contexts/FilterContext";
import { FavoritesContext } from "../features/filtering/contexts/FavoritesContext";
import useFilteredData from "../features/filtering/hooks/useFilteredData";
import useSortedData from "../features/filtering/hooks/useSortedData";

const App = () => {
  const [data, setData] = useState<Asset[]>([]);
  const { fileType, sortBy, searchBy } = useContext(FilterContext);
  const { favorites, showFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    setData(mockData);
  }, []);

  const loading = !data.length;

  const filteredData = useFilteredData({
    data,
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

      <GalleryPage data={sortedData} loading={loading} />
    </Box>
  );
};
export default App;
