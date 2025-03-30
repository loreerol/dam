import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const MediaContainerBase = styled(Box)({
  position: "relative",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingTop: "5px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    "& .hover-overlay": {
      opacity: 1,
    },
  },
});

const MimeTag = styled(Typography)({
  position: "absolute",
  bottom: 8,
  right: 8,
  backgroundColor: "rgba(33, 33, 33, 0.8)",
  color: "#eff0eb",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "0.75rem",
  zIndex: 2,
});

const StyledOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.2s ease-in-out",
  zIndex: 1,
});

interface MediaContainerProps {
  image: string;
  altText: string;
  mimeType?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const MediaContainer = ({
  image,
  altText,
  mimeType,
  children,
  onClick,
}: MediaContainerProps) => {
  return (
    <MediaContainerBase onClick={onClick}>
      <CardMedia
        component="img"
        image={image}
        alt={altText}
        sx={{
          width: "auto",
          height: "100%",
          objectFit: "contain",
        }}
      />

      {onClick && (
        <StyledOverlay className="hover-overlay">
          <Typography variant="body1" color="common.white" fontWeight="500">
            View Details
          </Typography>
        </StyledOverlay>
      )}

      {mimeType && <MimeTag>{mimeType}</MimeTag>}

      {children}
    </MediaContainerBase>
  );
};

export default MediaContainer;
