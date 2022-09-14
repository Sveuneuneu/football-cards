import { FC, useState } from "react";
import { IPlayer } from "../interfaces/player";
import {
    Container,
    Grid,
  } from "@mui/material";
import PlayerCard from "./PlayerCard";

const PlayersDisplay: FC<{ players: IPlayer[] }> = ({ players }) => {
    return (
        <Container>
          <Grid container alignItems="center" spacing={4}>
            {players.map((displayPlayer: IPlayer) => (
              <Grid item key={displayPlayer.id} sm={12} md={6}>
                <PlayerCard player={displayPlayer} />
              </Grid>
            ))}
          </Grid>
        </Container>
    )
}

export default PlayersDisplay;
