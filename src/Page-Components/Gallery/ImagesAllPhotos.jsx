import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TitlebarBelowMasonryImageList() {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [itemData, setItemData] = useState([]);

  // Media queries for responsiveness
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');

    axios.get('/api/gallery', {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
      .then(response => {
        const images = response.data.map(image => ({
          img: image.ImageLink,
          title: image.ImageTitle,
          description: image.ImageDescription
        }));
        setItemData(images);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const handleOpen = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImg(null);
  };

  return (
    <Box sx={{ width: '100%', padding: { xs: '0 10px', md: '0 250px' }, overflowY: 'scroll' }}>
      <ImageList
        variant="masonry"
        cols={isSmallScreen ? 1 : isMediumScreen ? 2 : 3} // Adjust columns based on screen size
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleOpen(item.img)}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
            />
            <ImageListItemBar position="below" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            outline: 'none',
            borderRadius: 1,
          }}
        >
          <img
            src={currentImg}
            alt=""
            style={{ width: '100%', maxHeight: '80vh', borderRadius: '8px' }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
            {itemData.find(item => item.img === currentImg)?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {itemData.find(item => item.img === currentImg)?.description}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
