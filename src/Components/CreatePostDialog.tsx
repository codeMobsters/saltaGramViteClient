import React, { useState } from "react";
import { Button, Textarea } from "@material-tailwind/react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./CreatePostDialog.css";

interface InstaNavBarProps {
  createDialogOpen: boolean;
  setCreateDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getPosts: () => void;
}

function CreatePostDialog(props: InstaNavBarProps) {
  const [description, setDescription] = useState("");
  const [currentImage, setCurrentImage] = useState<File>();

  // function handleClickOpen() {
  //   props.setCreateDialogOpen(true);
  // }

  function handleClose() {
    props.setCreateDialogOpen(false);
    setDescription("");
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
      formData.append("description", description);

      const requestOptions = {
        method: "POST",
        headers: {},
        body: formData,
      };
      const response = await fetch(
        "https://codemobsterssaltagramapi.azurewebsites.net/api/Posts",
        // `https://localhost:7201/api/Posts`,
        requestOptions
      );
      props.getPosts();
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
        <DialogContentText marginBottom="10px">
          Add picture and comment.
        </DialogContentText>
        <input
          className="createDialogFormInput"
          type="file"
          accept="image/*"
          onChange={selectImage}
        />
        <Textarea
          placeholder="Description"
          className="pr-5 font-sans createDialogFormInputTextArea"
          onChange={e => setDescription(e.target.value)}
          value={description}
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
