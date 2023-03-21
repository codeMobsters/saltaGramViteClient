import { Box } from '@mui/material'
import React from 'react'
import ImageFeed from './ImageFeedContainer';
import "./MainComponent.css";
import UserBar from './UserBar';

const MainComponent = () => {
  return (
    <Box className="mainCompBox">
        <ImageFeed />
        <UserBar />
    </Box>
  )
}

export default MainComponent