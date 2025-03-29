import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ContentCard from "./ContentCard";
import { Asset } from "../types";

interface CardGalleryProps {
  data: Asset[];
  loading: boolean;
}

const CardGallery = ({ data, loading }: CardGalleryProps) => {
  if (loading) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }

  return (
    <Box sx={{ width: "100%", marginTop: "50px" }}>
      {data.length === 0 ? (
        <Typography variant="h6" align="center">
          No items to display, please try removing a filter or searching by another
          filename
        </Typography>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 3,
          }}
        >
          {data.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CardGallery;
