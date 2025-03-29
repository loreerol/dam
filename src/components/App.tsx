import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Asset } from "./types";
import mockData from "../mockData";
import Header from "./Header";
import SideBar from "./SideBar";
import GalleryPage from "./CardGallery/CardGallery";
import { FilterContext } from "../contexts/FilterContext";
import useFilteredData from "../hooks/useFilteredData";
import useSortedData from "../hooks/useSortedData";
import { FavoritesContext } from "../contexts/FavoritesContext";

const App = () => {
  const [data, setData] = useState<Asset[]>([]);
  const { fileType, sortBy, searchBy,  } = useContext(FilterContext);
  const {favorites, showFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    setData(mockData);
  }, []);

  const loading = !data.length;

  const filteredData = useFilteredData({data, fileType, searchBy, favorites, showFavorites});
  const sortedData = useSortedData({data: filteredData, sortBy});

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideBar />
      <Toolbar />
      <Container>
        <Toolbar />
        <GalleryPage data={sortedData} loading={loading} />
      </Container>
    </Box>
  );
};
export default App;
