import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ContentCard from "./ContentCard";
import { Asset } from "../../types";
import Button from "@mui/material/Button";

interface CardGalleryProps {
  data: Asset[];
  loading: boolean;
  error: Error | null;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const CardGallery = ({
  data,
  loading,
  error,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: CardGalleryProps) => {
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
    <Box
      sx={{
        marginTop: "80px",
        marginLeft: "calc(20% - 200px)",
        marginRight: "20%",
        width: "100%",
      }}
    >
      {data.length === 0 && !isFetchingNextPage ? (
        <Typography variant="h6" align="center">
          No items to display, please try removing a filter or searching by
          another filename
        </Typography>
      ) : (
        <>
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
          <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
            <Button
              variant="contained"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                  ? "Load More"
                  : "All items are loaded"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CardGallery;
