import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const MimeTypeTagBase = styled(Typography)({
  position: "absolute",
  bottom: 8,
  right: 8,
  backgroundColor: "rgba(33, 33, 33, 0.8)",
  color: "#eff0eb",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "0.75rem",
});

const MimeTypeTag = (props: TypographyProps) => <MimeTypeTagBase {...props} />;

export { MimeTypeTag };
