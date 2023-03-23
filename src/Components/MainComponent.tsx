import { Box } from '@mui/material'
import { Post } from '../Types/Types';
import ImageFeedContainer from './ImageFeedContainer';
import "./MainComponent.css";
import UserBar from './UserBar';

export type MainCompProps = {
  searchTerm :string;
  posts? :Post[];
  getPosts : () => void;
  scrollingToTop :boolean;
};

const MainComponent = (props :MainCompProps) => {
  return (
    <Box className="mainCompBox">
        <ImageFeedContainer searchTerm={props.searchTerm} posts={props.posts} getPosts={props.getPosts} scrollingToTop={props.scrollingToTop}/>
        <UserBar />
    </Box>
  )
}

export default MainComponent