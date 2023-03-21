import "./App.css";
import { Box } from "@mui/material";
import InstaNavBar from "./Components/InstaNavBar";
import MainComponent from "./Components/MainComponent";

function App() {

  return (
    <Box className="App">
      <InstaNavBar />
      <MainComponent />
    </Box>
  );
}

export default App;
