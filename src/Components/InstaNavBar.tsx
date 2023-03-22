import { Box, Link } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./InstaNavBar.css";

interface InstaNavBarProps {
  setCreateDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function InstaNavBar(props: InstaNavBarProps) {
  return (
    <Box className="instaNavBarBox">
      SaltaGram
      <ul>
        <li>
          <HomeIcon color="primary" onClick={() => {}} />
          Home
        </li>
        <li onClick={() => props.setSearchDialogOpen(true)}>
          <SearchIcon color="primary" onClick={() => {}} /> Search
        </li>
        <li onClick={() => props.setCreateDialogOpen(true)}>
          <AddBoxOutlinedIcon color="primary" /> Create
        </li>
      </ul>
    </Box>
  );
}

export default InstaNavBar;
