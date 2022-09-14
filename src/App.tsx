import {
  AppBar,
  Typography,
  Button,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { playersFetched } from "./store/players";
import PlayersDisplay from "./components/PlayersDisplay";
import PlayerForm from "./components/PlayerForm";
import { Container } from "@mui/system";
import { useEffect } from "react";

function App() {
  const players = useSelector((state: any) => state.players)
  const dispacth = useDispatch();

  const theme = createTheme();

  const onFetchButtonClick = () => {
    dispacth(playersFetched())
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header>
          <AppBar position="relative">
            <Typography>APP BAR</Typography>
          </AppBar>
        </header>
        <main>
          <Container>
            <PlayerForm />
          </Container>
          <Container>
            <Button onClick={() => onFetchButtonClick()}>Fetching data</Button>
            <PlayersDisplay players={players} />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
