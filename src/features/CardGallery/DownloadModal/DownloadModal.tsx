import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaContainer from "../ContentCard/MediaContainer";
import { Container, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface DownloadModalProps {
  modalOpen: boolean;
  toggleModal: () => void; 
  image: string; // Should be the actual image URL for download
  data:  {
    formattedFileName: string;
    formatedCreatedDate: string;
    formatedModiedDate: string;
    fileExtention: string;
    fileType: string;
  };
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: "1px solid grey",
  bgcolor: 'white',
  p: "2em",
  borderRadius: 2,
  width: 500
};

const DownloadModal = ({ modalOpen, toggleModal, image, data }: DownloadModalProps) => {
  const handleDownload = async () => {
  
      alert('Sorry, this is not implemented yet');
  };

  return (
    <Modal
      open={modalOpen}
      onClose={toggleModal}
      sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }}
    >
      <Box sx={style}>
        <Container sx={{ width: "75%" }}>
          <MediaContainer image={image} altText={data.formattedFileName} />
          <Typography variant="h6" component="h2">
            {data.formattedFileName}
          </Typography>
          <Typography variant="h6" component="h2">
            {`Filetype: ${data.fileExtention} ${data.fileType}`}
          </Typography>
          
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
          >
            Download
          </Button>
        </Container>
      </Box>
    </Modal>
  );
};

export default DownloadModal;