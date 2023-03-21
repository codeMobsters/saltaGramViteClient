import { Box } from '@mui/material'
import ImageFeedContainer from './ImageFeedContainer';
import "./MainComponent.css";
import UserBar from './UserBar';

const MainComponent = () => {
  return (
    <Box className="mainCompBox">
        <ImageFeedContainer />
        <UserBar />
    </Box>
  )
}

export default MainComponent