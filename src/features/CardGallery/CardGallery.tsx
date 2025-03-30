import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ContentCard from "./ContentCard";
import { Asset } from "../../types";

interface CardGalleryProps {
  data: Asset[];
  loading: boolean;
  error: Error | null;
}

const CardGallery = ({ data, loading, error }: CardGalleryProps) => {
  if (loading) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" align="center">
        `Oh no, an error! ${error.message}`
      </Typography>
    );
  }

  return (
    // TO DO: Replace hard-coded margins with a better way to account for the sidebar's width
    <Box sx={{ marginTop: "80px", marginLeft:'calc(20% - 200px)', marginRight: "20%", width:'100%'}}>
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
