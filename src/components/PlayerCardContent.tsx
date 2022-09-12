import { CardContent, TextField, Grid } from "@mui/material";
import { FC } from "react";
import { IPlayer } from "../interfaces/player";

const PlayerCardContent: FC<{
  cardPlayer: IPlayer;
  setCardPlayer: (player: IPlayer) => void;
  isEditing?: boolean;
}> = ({ cardPlayer, setCardPlayer, isEditing = false }) => {
  const onAttributeChange = (
    value: string,
    attribue: string /* todo remplace by TS type only IPlayer key */
  ) => {
    setCardPlayer({
      ...cardPlayer,
      [attribue]: value,
    });
  };

  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Firstname"
            value={cardPlayer.firstname}
            disabled={!isEditing}
            onChange={(event) =>
              onAttributeChange(event.target.value, "firstname")
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Lastname"
            value={cardPlayer.lastname}
            disabled={!isEditing}
            onChange={(event) =>
              onAttributeChange(event.target.value, "lastname")
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Birthday"
            value={cardPlayer.birthday}
            disabled={!isEditing}
            onChange={(event) =>
              onAttributeChange(event.target.value, "birthday")
            }
          />
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default PlayerCardContent;
