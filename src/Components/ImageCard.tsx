import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { ImageCardProps, Post } from '../Types/Types';
import "./ImageCard.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Button, Textarea } from "@material-tailwind/react";
import { useRef, useState } from 'react';
import { Key } from '@mui/icons-material';


const ImageCard = ({postData, AddComment} : ImageCardProps) => {
    const [comment, setComment] = useState("");
    const commentButton = useRef(null);
    function handleSubmit() {
        AddComment({postId: postData.postId, commentText: comment, name: "Commenter name"});
    }
  return (
    <Card variant="outlined" sx={{ maxWidth: "100%", marginBottom: "40px" }}>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={postData && postData.description}
      subheader={postData && postData.uploadedAt.toString()}
    />
    <CardMedia
      component="img"
      max-width="50vw"
      image={postData && postData.pictureUrl}
      alt={postData && postData.description}
    />
    <CardContent>
    <Typography variant="body2" color="text.secondary" className="commentsTypo">
        <b><u>Comments:</u></b>
      </Typography>
      </CardContent>
      {postData && postData.comments?.map(comm => <p key={comm.commentId}><b>{comm.name}</b>: {comm.commentText}<br/></p>)}
      <CardContent>
    <Textarea
          style={{width:"100%", height: "10vh"}}
          placeholder="Type a comment"
          className="pr-5 font-sans"
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
    </CardContent>
    <IconButton ref={commentButton} aria-label="add comments" onClick={() => handleSubmit()}>
          <CommentIcon />
    </IconButton>
    </Card>
  )
}

export default ImageCard