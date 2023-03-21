import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Picture } from "./Types/Types";
import ImageFeed from "./Components/ImageFeedContainer";
import InstaNavBar from "./Components/InstaNavBar";
import MainComponent from "./Components/MainComponent";

function App() {
  const [pictures, setPictures] = useState<Picture[]>();

  async function getPictures() {
    try {
      const response = await fetch(
        "https://codemobsterssaltagramapi.azurewebsites.net/api/Posts"
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <Box className="App">
      <InstaNavBar />
      <MainComponent />
    </Box>
  );
}

export default App;
