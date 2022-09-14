import { Card, CardMedia, CardActions, Button, TextField, CardContent, Grid } from "@mui/material";
import { FC, useState } from "react";
import { IPlayer } from "../interfaces/player";
import { useDispatch } from "react-redux";
import { playerDeleted, playerUpdated } from "../store/players";

const PlayerCard: FC<{
  player: IPlayer;
}> = ({ player }) => {
  const dispatch = useDispatch();
  const [cardPlayer, setCardPlayer] = useState(player);
  const [isEditing, setIsEditing] = useState(false);

  const onSaveButtonClick = () => {
    dispatch(playerUpdated(cardPlayer));
    setIsEditing(false);
  };

  const onAttributeChange = (value: string, attribue: keyof IPlayer) => {
    setCardPlayer({
      ...cardPlayer,
      [attribue]: value,
    });
  };

  return (
    <Card>
      <CardActions>
        <Button onClick={() => dispatch(playerDeleted(cardPlayer))}>
          Delete
        </Button>
        <Button disabled={isEditing} onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        {isEditing ? (
          <Button onClick={() => onSaveButtonClick()}>Save</Button>
        ) : null}
      </CardActions>
      <CardMedia
        component="img"
        image={cardPlayer.profilePhoto}
        alt={cardPlayer.firstname}
        height="450"
      />
      {isEditing ? (
        <TextField
          label="Picture URI"
          value={cardPlayer.profilePhoto}
          onChange={(event) =>
            onAttributeChange(event.target.value, "profilePhoto")
          }
        />
      ) : null}
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
    </Card>
  );
};

export default PlayerCard;
