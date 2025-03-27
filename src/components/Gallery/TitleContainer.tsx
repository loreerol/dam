import React, { ReactNode } from "react";
import { styled } from "@mui/material";

const TitleContainerBase = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

interface MediaContainerProps {
  children: ReactNode;
}

const TitleContainer = ({ children }: MediaContainerProps) => (
  <TitleContainerBase> {children}</TitleContainerBase>
);

export { TitleContainer };
