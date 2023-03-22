import "./App.css";
import { Box } from "@mui/material";
import InstaNavBar from "./Components/InstaNavBar";
import MainComponent from "./Components/MainComponent";
import { useState } from "react";
import CreatePostDialog from "./Components/CreatePostDialog";

function App() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  return (
    <Box className="App">
      <InstaNavBar setCreateDialogOpen={setCreateDialogOpen} />
      <MainComponent />
      <CreatePostDialog
        createDialogOpen={createDialogOpen}
        setCreateDialogOpen={setCreateDialogOpen}
      />
    </Box>
  );
}

export default App;
