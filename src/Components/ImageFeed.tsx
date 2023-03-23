import { Box } from "@mui/material";
import { CommentAddREquest, Post } from "../Types/Types";
import ImageCard from "./ImageCard";
import "./ImageFeed.css";
import React, { useEffect, useState } from "react";

export type ImageFeedProps = {
  searchTerm: string;
  getPosts: () => void;
  posts?: Post[];
};

const ImageFeed = React.forwardRef((props: ImageFeedProps, ref) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>();

  async function AddComment(request: CommentAddREquest) {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      };
      await fetch(
        "https://codemobsterssaltagramapi.azurewebsites.net/api/Comments",
        // "https://localhost:7201/api/Comments",
        requestOptions
      );
      await props.getPosts();
    } catch (e: any) {
      throw new Error("Comment error");
    }
  }

  useEffect(() => {
    setFilteredPosts(props.posts);
  }, [props.posts]);

  useEffect(() => {
    if (props.searchTerm != "" && props.posts) {
      setFilteredPosts(
        props.posts.filter(x => x.description.indexOf(props.searchTerm) > -1)
      );
    } else {
      setFilteredPosts(props.posts);
    }
  }, [props.searchTerm]);

  return (
    <Box className="imageFeed" ref={ref}>
      {filteredPosts &&
        filteredPosts.map(post => (
          <ImageCard
            key={post.postId}
            postData={post as Post}
            AddComment={AddComment}
          />
        ))}
    </Box>
  );
});

export default ImageFeed;
