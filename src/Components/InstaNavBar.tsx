import { Box } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./InstaNavBar.css";

const InstaNavBar = () => {
  return (
    <Box className="instaNavBarBox">
      SaltaGram
      <ul>
        <li>
          <HomeIcon color="primary" onClick={() => {}} />
          Home
        </li>
        <li>
          <SearchIcon color="primary" onClick={() => {}} /> Search
        </li>
        <li>
          <AddBoxOutlinedIcon color="primary" onClick={() => {}} /> Create
        </li>
      </ul>
    </Box>
  );
};

export default InstaNavBar;
