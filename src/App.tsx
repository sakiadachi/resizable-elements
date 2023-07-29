import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import { Box } from "@mui/material";
import LeftMenu from "./components/LeftMenu";
import BoxCenter from "./components/BoxCenter/BoxCenter";
import BoxRight from "./components/BoxRight";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <ButtonAppBar />
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
          }}
        >
          <LeftMenu />
          <BoxCenter />
          <BoxRight />
        </Box>
      </Box>
    </div>
  );
}

export default App;
