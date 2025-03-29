import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";

const MediaContainerBase = styled("div")({
  position: "relative",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  paddingTop: "5px",
  overflow: "hidden",
});

interface MediaContainerProps {
  children: ReactNode;
}

const MediaContainer = ({ children }: MediaContainerProps) => (
  <MediaContainerBase>{children}</MediaContainerBase>
);

export default MediaContainer;
