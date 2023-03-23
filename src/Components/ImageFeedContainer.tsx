import { Box } from '@mui/material'
import React from 'react';
import { useEffect, useRef } from 'react';
import { Post } from '../Types/Types';
import HeaderPics from './HeaderPics';
import ImageFeed from './ImageFeed';
import "./ImageFeedContainer.css";

export type ImageFeedContProps = {
  searchTerm :string;
  posts? :Post[];
  getPosts : () => void;
  scrollingToTop :boolean;
}

const ImageFeedContainer = (props :ImageFeedContProps) => {
  const imageFeedRef = React.createRef<HTMLUListElement>();

  useEffect(() => {
    if(props.scrollingToTop != null && imageFeedRef?.current){
      imageFeedRef.current.scrollTo(0, 0);
    }
  },[props.scrollingToTop])

  return (
    <Box className="ImageFeedContainerBox">
        <HeaderPics />
        <ImageFeed ref={imageFeedRef} searchTerm={props.searchTerm} posts={props.posts} getPosts={props.getPosts}/>
    </Box>
  )
}

export default ImageFeedContainer