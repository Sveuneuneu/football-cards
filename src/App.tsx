import {
  AppBar,
  Typography,
  Box,
  Container,
  Grid,
  Button,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { IPlayer } from "./interfaces/player";
import { playerAdded } from "./store/players";
import PlayerCard from "./components/PlayerCard";

function App() {
  const players: IPlayer[] = useSelector((state: any) => state.players);
  const dispacth = useDispatch();

  const theme = createTheme();

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
          Main display here
          <Button onClick={() => dispacth(playerAdded())}>add player</Button>
          <Box>
            <Container>
              <Grid container alignItems="center" spacing={4}>
                {players.map((player: IPlayer) => (
                  <Grid item key={player.id} sm={12} md={6}>
                    <PlayerCard player={player} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
