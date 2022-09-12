import { AppBar, Typography, Box, Container, Grid, Button } from '@mui/material';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { IPlayer } from './interfaces/player';
import { playerAdded } from './store/players';
import PlayerCard from './components/PlayerCard';

function App() {

  const players: IPlayer[] = useSelector((state: any) => state.players)
  const dispacth = useDispatch()

  return (
    <div className="App">
      <header>
          <AppBar position="relative">
            <Typography>
              APP BAR
            </Typography>
          </AppBar>
      </header>
      <main>
          Main display here
          <Button
            onClick={() => dispacth(playerAdded())}>
            add player
          </Button>
          <Box>
           <Container>
            <Grid container alignItems="center" spacing={4}>
              {players.map((player: IPlayer, index) => (
                <Grid item key={index} sm={12} md={6}>
                  <PlayerCard player={player} />
                </Grid>
              ))}
            </Grid>
           </Container>
          </Box>
      </main>
    </div>
  );
}

export default App;
