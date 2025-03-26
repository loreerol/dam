import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";

import { Asset } from "../../types";
import { formatSnakeCase, formatMimeType } from "./utils";
import useMimeTypeIcon from "./hooks/useMimeTypeIcon";

type ContentCardProps = {
  item: Asset;
};

const ContentCard = ({ item }: ContentCardProps) => {
  const MimeTypeIcon = useMimeTypeIcon(item.mimeType);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={formatSnakeCase(item.fileName)}
        subheader={formatMimeType(item.mimeType)}
        action={<MimeTypeIcon />}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.preview}
        alt={item.fileName}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Created: {item.createdAt}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Modified: {item.modifiedAt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="download">
          <DownloadIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
