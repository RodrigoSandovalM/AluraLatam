import "./App.css";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import "./assets/main.css";
import { SobreMi } from "./components/SobreMi";
import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <Box className="main">
      <NavBar />
      <SobreMi/>
      <Proyectos/>
    </Box>
  );
}

export default App;
