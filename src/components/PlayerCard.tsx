import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useSelector } from "react-redux"
import { FC } from 'react'
import { IPlayer } from '../interfaces/player'

const PlayerCard: FC<{
    player: IPlayer
}> = ({player}) => {
    console.log(player)
    return (
        <Card>
            <CardMedia 
                component="img"
                image={player.profilePhoto}
                alt={player.firstname}
                height="450"/>
            <CardContent>
                <Typography variant="h5" color="initial">
                    {`${player.firstname} - ${player.lastname.toLocaleUpperCase()}`}
                </Typography>
                <Typography variant="subtitle1" color="initial">
                    Born: {player.birthday}
                </Typography>
                <Typography variant="body1" color="initial">
                    Position: {player.playedClubs[0].position}
                </Typography>
                <ul>
                    {player.playedClubs.map((playedClub, index) => (
                        <li key={index}>
                            { JSON.stringify(playedClub)}
                        </li>)
                    )}
                </ul>
            </CardContent>
        </Card>
    )
}

export default PlayerCard