import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { CommentAddREquest, Post } from "../Types/Types";
import ImageCard from "./ImageCard";
import "./ImageFeed.css";

export type ImageFeedProps = {
  searchTerm :string;
}

const ImageFeed = (props :ImageFeedProps) => {
  const [posts, setPosts] = useState<Post[]>();

  // if searchTerm is not empty, there is a search happening -> useEffect

  async function getPosts() {
    try {
      const response = await fetch(
        // "https://codemobsterssaltagramapi.azurewebsites.net/api/Posts"
        "https://localhost:7201/api/Posts"
      );
      const json = await response.json();
      console.log(json);
      setPosts(json);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  async function AddComment(request :CommentAddREquest) {
    console.log(request);
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
      };
      await fetch("https://localhost:7201/api/Comments", requestOptions);
      await getPosts();
    } catch (e :any) {
      throw new Error('Comment error');
    }
  }

  return (
    <Box className="imageFeed">
      {posts && posts.map(post => <ImageCard key={post.postId} postData={post as Post} AddComment={AddComment}/>)}
        {props.searchTerm && <p>{props.searchTerm}</p>}
    </Box>
  );
};

export default ImageFeed;
