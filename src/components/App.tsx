import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Asset } from "./Gallery/types";
import mockData from "./mockData";
import Header from "./PageControls/Header";
import SideBar from "./PageControls/SideBar";
import GalleryPage from "./Gallery/GalleryPage";

const App = () => {
  const [data, setData] = useState<Asset[]>([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideBar />
      <Toolbar />
      <Container>
        <Toolbar />
        <GalleryPage data={data} />
      </Container>
    </Box>
  );
};
export default App;
