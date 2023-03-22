import React, { useState } from "react";
import { Button, Textarea } from "@material-tailwind/react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface InstaNavBarProps {
  createDialogOpen: boolean;
  setCreateDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreatePostDialog(props: InstaNavBarProps) {
  const [comment, setComment] = useState("");
  const [currentImage, setCurrentImage] = useState<File>();

  function handleClickOpen() {
    props.setCreateDialogOpen(true);
  }

  function handleClose() {
    props.setCreateDialogOpen(false);
    setComment("");
  }

  function selectImage(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
  }

  async function addPost() {
    try {
      let formData = new FormData();
      if (currentImage != undefined) {
        formData.append("formFile", currentImage);
      }
      formData.append("comment", comment);

      const requestOptions = {
        method: "POST",
        headers: {},
        body: formData,
      };
      const response = await fetch(
        `https://localhost:7201/api/Posts`,
        requestOptions
      );
      return response.ok;
    } catch (e: any) {
      throw new Error("Problems");
    }
  }

  function handlePost() {
    addPost();
    handleClose();
  }

  return (
    <Dialog open={props.createDialogOpen} onClose={() => handleClose()}>
      <DialogTitle>Create new post</DialogTitle>
      <DialogContent>
        <DialogContentText>Add picture and comment.</DialogContentText>
        <input type="file" accept="image/*" onChange={selectImage} />
        <Textarea
          label="Comment"
          className="pr-5 font-sans"
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handlePost()}>Save changes</Button>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreatePostDialog;
