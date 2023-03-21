import { Box } from '@mui/material'
import React from 'react'
import HeaderPics from './HeaderPics';
import ImageFeed from './ImageFeed';
import "./ImageFeedContainer.css";

const ImageFeedContainer = () => {
  return (
    <Box className="ImageFeedContainerBox">
        <HeaderPics />
        <ImageFeed />
    </Box>
  )
}

export default ImageFeedContainer