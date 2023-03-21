import { Box } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import "./InstaNavBar.css";

const InstaNavBar = () => {
  return (
    <Box className="instaNavBarBox">
        SaltaGram
        <ul>
            <li>
                Home <HomeIcon color='primary' onClick={() => {}}/>
            </li>
            <li>
                Search <SearchIcon color='primary' onClick={() => {}}/>
            </li>
        </ul>
    </Box>
  )
}

export default InstaNavBar