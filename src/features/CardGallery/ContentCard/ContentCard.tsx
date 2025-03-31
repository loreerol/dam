import React, { useContext, useMemo, useState } from "react";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Card from "./Card";
import MediaContainer from "./MediaContainer";
import { FavoritesContext } from "../../filtering/contexts/FavoritesContext";
import {
  formatDate,
  formatSnakeCase,
  getFileExtention,
  getFileType,
} from "./utils";
import { useIsTruncated } from "./hooks/useIsTruncated";
import { Asset } from "../../../types";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import DownloadModal from "../DownloadModal";

type ContentCardProps = {
  item: Asset;
};

const ContentCard = ({ item }: ContentCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const cardData = useMemo(
    () => ({
      formattedFileName: formatSnakeCase(item.fileName),
      formatedCreatedDate: formatDate(item.createdAt),
      formatedModiedDate: formatDate(item.modifiedAt),
      fileExtention: getFileExtention(item.mimeType),
      fileType: getFileType(item.mimeType),
    }),
    [item],
  );
  const { isTruncated, textRef } = useIsTruncated(cardData.formattedFileName);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const isFavorited = favorites.includes(item.id);

  return (
    <>
      <Card>
        <MediaContainer
          image={item.preview}
          altText={item.fileName}
          mimeType={cardData.fileExtention}
          onClick={toggleModal}
        ></MediaContainer>
        <CardContent
          sx={{
            padding: "15px 0px 15px 0px",
          }}
        >
          <Box>
            <Tooltip
              title={cardData.formattedFileName}
              disableHoverListener={!isTruncated}
            >
              <Typography variant="h6" ref={textRef} noWrap>
                {cardData.formattedFileName}
              </Typography>
            </Tooltip>
          </Box>
          <Typography variant="body2">
            Created: {cardData.formatedCreatedDate}
          </Typography>
          <Typography variant="body2">
            Modified: {cardData.formatedModiedDate}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={() => toggleFavorite(item.id)}
          >
            <FavoriteIcon color={isFavorited ? "error" : "inherit"} />
          </IconButton>
          <IconButton aria-label="download" onClick={toggleModal}>
            <DownloadIcon />
          </IconButton>
        </CardActions>
      </Card>
      <DownloadModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        image={item.preview}
        data={cardData}
        fileSize={item.fileSize}
      />
    </>
  );
};

export default ContentCard;
