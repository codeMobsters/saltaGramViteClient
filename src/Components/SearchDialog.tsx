import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import "./searchDialog.css";

interface SearchDialogProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchDialogOpen: boolean;
    setSearchDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    scrollingToTop: boolean;
    setScrollingToTop :React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchDialog(props: SearchDialogProps) {

  const [searchTermLocal, setSearchTermLocal] = useState("");

  function handleClose() {
    props.setSearchTerm("");
    props.setSearchDialogOpen(false);
  }

  function handlePost() {
    props.setSearchTerm(searchTermLocal);
    props.setScrollingToTop(!props.scrollingToTop);
    props.setSearchDialogOpen(false);
  }

  return (
    <Dialog open={props.searchDialogOpen} onClose={() => handleClose()}>
      <DialogTitle>Search</DialogTitle>
      <DialogContent>
        <TextField
          placeholder="Type search term"
          className="pr-5 font-sans createDialogFormInputText"
          onChange={e => setSearchTermLocal(e.target.value)}
          value={searchTermLocal}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handlePost()}>Search</Button>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SearchDialog;
