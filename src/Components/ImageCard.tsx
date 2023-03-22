import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { ImageCardProps, Post } from '../Types/Types';
import "./ImageCard.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Button, Textarea } from "@material-tailwind/react";
import { useState } from 'react';


const ImageCard = ({postData, AddComment} : ImageCardProps) => {
    const [comment, setComment] = useState("");
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, marginBottom: "40px" }}>
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
    <Typography variant="body2" color="text.secondary">
        {postData && postData.Comments?.map(comm => <><p>{comm.commentText}</p><br/></>)}
      </Typography>
    <Textarea
          placeholder="Type a comment"
          className="pr-5 font-sans"
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
    </CardContent>
    <IconButton aria-label="add comments" onClick={() => AddComment({postId: postData.postId, commentText: comment, name: "Name prop"})}>
          <CommentIcon />
        </IconButton>
    </Card>
  )
}

export default ImageCard