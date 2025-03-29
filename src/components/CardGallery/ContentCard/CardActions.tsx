import React from "react";
import CardActionsBase, { CardActionsProps } from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";

const StyledCardActionBase = styled(CardActionsBase)({
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
});

const CardActions = (props: CardActionsProps) => (
  <StyledCardActionBase {...props} />
);

export default CardActions;
