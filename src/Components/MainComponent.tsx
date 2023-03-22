import { Box } from '@mui/material'
import ImageFeedContainer from './ImageFeedContainer';
import "./MainComponent.css";
import UserBar from './UserBar';

export type MainCompProps = {
  searchTerm :string;
};

const MainComponent = (props :MainCompProps) => {
  return (
    <Box className="mainCompBox">
        <ImageFeedContainer searchTerm={props.searchTerm}/>
        <UserBar />
    </Box>
  )
}

export default MainComponent