import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Asset } from "./Gallery/types";
import mockData from "./mockData";
import GalleryPage from "./Gallery/GalleryPage";

const App = () => {
  const [data, setData] = useState<Asset[]>([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <Box >
      <Container>
        <Typography variant="h4" gutterBottom>
          DAM, what great content!
        </Typography>
      <GalleryPage data={data} />

      </Container>
    </Box>
  );
};

export default App;
