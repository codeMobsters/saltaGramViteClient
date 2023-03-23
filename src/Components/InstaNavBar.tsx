import { Box, Link } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./InstaNavBar.css";

interface InstaNavBarProps {
  setCreateDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setScrollingToTop: React.Dispatch<React.SetStateAction<boolean>>;
  scrollingToTop: boolean;
  setSearchTerm :React.Dispatch<React.SetStateAction<string>>;
}

function InstaNavBar(props: InstaNavBarProps) {
  return (
    <Box className="instaNavBarBox">
      SaltaGram
      <ul>
        <li onClick={() => {props.setScrollingToTop(!props.scrollingToTop); props.setSearchTerm("")}}>
          <HomeIcon color="primary" />
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
