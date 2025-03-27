import * as React from "react";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";

import { Card } from "../Card";

import { Asset } from "../types";
import { formatSnakeCase, formatMimeType, formatDate } from "./utils";
import { MediaContainer } from "../MediaContainer";
import { MimeTypeTag } from "../MimeTypeTag";
import { TitleContainer } from "../TitleContainer";
import { CardActions } from "../CardActions";

type ContentCardProps = {
  item: Asset;
};

const useStyles = makeStyles({
  title: {
    fontSize: "1rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flex: 1,
  },
});

const ContentCard = ({ item }: ContentCardProps) => {
  const classes = useStyles();
  const [isTruncated, setIsTruncated] = React.useState(false);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const formattedFileName = formatSnakeCase(item.fileName);
  const formatedMimeType = formatMimeType(item.mimeType);
  const formatedCreatedDate = formatDate(item.createdAt);
  const formatedModiedDate = formatDate(item.modifiedAt);

  React.useEffect(() => {
    if (titleRef.current) {
      const isOverflowing =
        titleRef.current.scrollWidth > titleRef.current.clientWidth;
      setIsTruncated(isOverflowing);
    }
  }, [item.fileName]);

  return (
    <Card>
      <MediaContainer>
        <CardMedia
          component="img"
          image={item.preview}
          alt={item.fileName}
          sx={{
            width: "auto",
            objectFit: "contain",
          }}
        />
        <MimeTypeTag>{formatedMimeType}</MimeTypeTag>
      </MediaContainer>
      <CardContent
        sx={{
          padding: "15px 0px 15px 0px",
        }}
      >
        <TitleContainer>
          {isTruncated ? (
            <Tooltip title={formattedFileName}>
              <Typography variant="h6" className={classes.title} ref={titleRef}>
                {formattedFileName}
              </Typography>
            </Tooltip>
          ) : (
            <Typography variant="h6" className={classes.title} ref={titleRef}>
              {formattedFileName}
            </Typography>
          )}
        </TitleContainer>
        <Typography variant="body2" >
          Created: {formatedCreatedDate}
        </Typography>
        <Typography variant="body2">
          Modified: {formatedModiedDate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="download">
          <DownloadIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
