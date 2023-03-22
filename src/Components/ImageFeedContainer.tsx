import { Box } from '@mui/material'
import HeaderPics from './HeaderPics';
import ImageFeed from './ImageFeed';
import "./ImageFeedContainer.css";

export type ImageFeedContProps = {
  searchTerm :string;
}

const ImageFeedContainer = (props :ImageFeedContProps) => {
  return (
    <Box className="ImageFeedContainerBox">
        <HeaderPics />
        <ImageFeed searchTerm={props.searchTerm}/>
    </Box>
  )
}

export default ImageFeedContainer