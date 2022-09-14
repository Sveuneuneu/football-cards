import { Button, CardContent, Card, MenuItem, Select, TextField, CardActions, CardHeader } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { IPlayer, POSITION } from "../interfaces/player";
import { playerAdded } from "../store/players";

const PlayerForm: FC = () => {

    const initialNewPlayerState: IPlayer = {
        id: '',
        firstname: '',
        lastname: '',
        birthday: '',
        position: POSITION.ATTACK,
        profilePhoto: ''
    }

    const [newPlayer, setNewPlayer] = useState<IPlayer>(initialNewPlayerState)

    const onAttributeChange = (value: string, attribue: keyof IPlayer) => {
        setNewPlayer({
          ...newPlayer,
          [attribue]: value,
        });
      };

    const dispacth = useDispatch();

    const onAddPlayerClick = async () => {
        dispacth(playerAdded(newPlayer))
        setNewPlayer(initialNewPlayerState)
    }

    return (
        <Card>
            <CardHeader 
                title="Add player"
            />
            <CardContent>
                <TextField
                    label="Firstname"
                    value={newPlayer.firstname}
                    onChange={(event) =>
                        onAttributeChange(event.target.value, "firstname")
                    }
                />
                <TextField
                    label="Lastname"
                    value={newPlayer.lastname}
                    onChange={(event) =>
                        onAttributeChange(event.target.value, "lastname")
                    }
                />
                <TextField
                    label="Birthday"
                    value={newPlayer.birthday}
                    onChange={(event) =>
                        onAttributeChange(event.target.value, "birthday")
                    }
                />
                <TextField
                    label="Picture URI"
                    value={newPlayer.profilePhoto}
                    onChange={(event) =>
                        onAttributeChange(event.target.value, "profilePhoto")
                    }
                />
                <Select
                    label="Position"
                    value={newPlayer.position}
                    onChange={(event) =>
                        onAttributeChange(event.target.value, "position")
                    }
                >
                    {Object.values(POSITION).map((position, index) => {
                        return (
                            <MenuItem 
                                key={index}
                                value={position}>
                                {position}
                            </MenuItem>
                        )
                    })}
                </Select>
            </CardContent>
            <CardActions>
                <Button onClick={onAddPlayerClick}>add player</Button>
            </CardActions>
        </Card>
    )
}

export default PlayerForm
