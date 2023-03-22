import "./App.css";
import { Box } from "@mui/material";
import InstaNavBar from "./Components/InstaNavBar";
import MainComponent from "./Components/MainComponent";
import { useState } from "react";
import CreatePostDialog from "./Components/CreatePostDialog";
import SearchDialog from "./Components/SearchDialog";

function App() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box className="App">
      <InstaNavBar setCreateDialogOpen={setCreateDialogOpen} setSearchDialogOpen={setSearchDialogOpen}  />
      <MainComponent searchTerm={searchTerm}/>
      <SearchDialog
        searchDialogOpen={searchDialogOpen}
        setSearchDialogOpen={setSearchDialogOpen}
        setSearchTerm={setSearchTerm}
      />
      <CreatePostDialog
        createDialogOpen={createDialogOpen}
        setCreateDialogOpen={setCreateDialogOpen}
      />
    </Box>
  );
}

export default App;
