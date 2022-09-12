import { Card, CardMedia, CardActions, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { IPlayer } from "../interfaces/player";
import { useDispatch } from "react-redux";
import { playerDeleted, playerUpdated } from "../store/players";
import PlayerCardContent from "./PlayerCardContent";

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
          onChange={(event) => {
            setCardPlayer({
              ...cardPlayer,
              profilePhoto: event.target.value,
            });
          }}
        />
      ) : null}
      <PlayerCardContent
        cardPlayer={cardPlayer}
        setCardPlayer={setCardPlayer}
        isEditing={isEditing}
      />
    </Card>
  );
};

export default PlayerCard;
