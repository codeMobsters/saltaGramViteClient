import "./App.css";
import { Box } from "@mui/material";
import InstaNavBar from "./Components/InstaNavBar";
import MainComponent from "./Components/MainComponent";
import { useEffect, useState } from "react";
import CreatePostDialog from "./Components/CreatePostDialog";
import SearchDialog from "./Components/SearchDialog";
import { Post } from "./Types/Types";

function App() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>();
  const [scrollingToTop, setScrollingToTop] = useState(false);

  async function getPosts() {
    try {
      const response = await fetch(
        // "https://codemobsterssaltagramapi.azurewebsites.net/api/Posts"
        "https://localhost:7201/api/Posts"
      );
      const json = await response.json();
      console.log(json);
      setPosts(json);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Box className="App">
      <InstaNavBar 
        setCreateDialogOpen={setCreateDialogOpen} 
        setSearchDialogOpen={setSearchDialogOpen} 
        scrollingToTop={scrollingToTop} 
        setScrollingToTop={setScrollingToTop}
        setSearchTerm={setSearchTerm}
      />
      <MainComponent 
        searchTerm={searchTerm} 
        posts={posts?.sort((a, b) => b.postId - a.postId)} 
        getPosts={getPosts} 
        scrollingToTop={scrollingToTop}
      />
      <SearchDialog
        searchDialogOpen={searchDialogOpen}
        setSearchDialogOpen={setSearchDialogOpen}
        setSearchTerm={setSearchTerm}
      />
      <CreatePostDialog
        getPosts={getPosts}
        createDialogOpen={createDialogOpen}
        setCreateDialogOpen={setCreateDialogOpen}
      />
    </Box>
  );
}

export default App;
