import React, {useContext} from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";


import { formatSnakeCase, getFileExtention, formatDate } from "../../utils";
import { Asset } from "../../types";
import  Card  from "./Card";
import MediaContainer  from "./MediaContainer";
import MimeTypeTag from "./MimeTypeTag";
import TitleContainer from "./TitleContainer";
import CardActions  from "./CardActions";
import { useIsTruncated } from "../hooks/useIsTruncated";

import { FavoritesContext } from "../../../contexts/FavoritesContext";


type ContentCardProps = {
  item: Asset;
};

const ContentCard = ({ item }: ContentCardProps) => {
  const {toggleFavorite, favorites} = useContext(FavoritesContext)
  const isFavorited = favorites.includes(item.id);
  const formattedFileName = formatSnakeCase(item.fileName);
  const { isTruncated, textRef } = useIsTruncated(formattedFileName);
  const fileExtention = getFileExtention(item.mimeType);
  const formatedCreatedDate = formatDate(item.createdAt);
  const formatedModiedDate = formatDate(item.modifiedAt);


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
        <MimeTypeTag>{fileExtention}</MimeTypeTag>
      </MediaContainer>
      <CardContent
        sx={{
          padding: "15px 0px 15px 0px",
        }}
      >
        <TitleContainer>
          <Tooltip
            title={formattedFileName}
            disableHoverListener={!isTruncated}
          >
            <Typography variant="h6" ref={textRef} noWrap>
              {formattedFileName}
            </Typography>
          </Tooltip>
        </TitleContainer>
        <Typography variant="body2">Created: {formatedCreatedDate}</Typography>
        <Typography variant="body2">Modified: {formatedModiedDate}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => toggleFavorite(item.id)}>
          <FavoriteIcon color={isFavorited ? "error" : "inherit"}/>
        </IconButton>
        <IconButton aria-label="download">
          <DownloadIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
