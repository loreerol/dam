import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

import { Asset } from "../types";
import mockData from "./mockData";
import ContentCard from "./ContentCard";

const App = () => {
  const [data, setData] = useState<Asset[]>([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        DAM, what great content!
        {data.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </Typography>
    </Container>
  );
};

export default App;
