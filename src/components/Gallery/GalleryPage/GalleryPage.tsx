import React from "react";
import Grid from "@mui/material/Grid";

import ContentCard from "../ContentCard";
import { Asset } from "../types";

interface GalleryPageProps {
  data: Asset[];
}

const GalleryPage = ({ data }: GalleryPageProps) => (
    <Grid
      container
      spacing={3}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 3,
      }}
    >
      {data.map((item, index) => (
        <Grid key={index}>
          <ContentCard key={item.id} item={item} />
        </Grid>
      ))}
    </Grid>
  );

export default GalleryPage;
