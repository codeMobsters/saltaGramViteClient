import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Picture } from "../Types/Types";
import "./ImageFeed.css";

const ImageFeed = () => {
  const [pictures, setPictures] = useState<Picture[]>();

  async function getPictures() {
    try {
      const response = await fetch(
        "https://codemobsterssaltagramapi.azurewebsites.net/api/Posts"
      );
      const json = await response.json();
      console.log(json);
      setPictures(json);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <Box className="imageFeed">
      {/* {pictures && pictures.map(pic => <img key={pic.pictureId} src={pic.url} alt={pic.description}/>)} */}
      {pictures &&
        pictures.map(pic => <img key={Math.random()} src={pic.toString()} />)}
    </Box>
  );
};

export default ImageFeed;
