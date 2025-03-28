import React from "react";
import CardBase, { CardProps } from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const StyledCardBase = styled(CardBase)({
  width: 250,
  padding: "15px",
  display: "flex",
  flexDirection: "column",
});

const Card = (props: CardProps) => <StyledCardBase {...props} />;

export { Card };
