import { IPlayer, POSITION } from "../interfaces/player";
import { MOCK_CLUB_OM, MOCK_CLUB_WHU } from "./club";

export const MOCK_PLAYER_DIMITRI_PAYET: IPlayer = {
    firstname: "Dimitry",
    lastname: "Payet",
    birthday: new Date("1987-3-29"),
    profilePhoto: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTc4z0a1kjd1_U-1CYnmUDCkXnNZFNXXunQsCVmhh9XkXhsHgSOqXD-hQurEwtTIuiv",
    playedClub: [
        {
            ...MOCK_CLUB_OM,
            position: POSITION.MIDFIELD,
            from: new Date("2017-01-30"),
            to: null
        },
        {
            ...MOCK_CLUB_WHU,
            position: POSITION.MIDFIELD,
            from: new Date("2015-06-26"),
            to: new Date("2017-01-30")
        }
    ]
}