import { IPlayer, POSITION } from "../interfaces/player";
import { MOCK_CLUB_OM, MOCK_CLUB_SKM, MOCK_CLUB_WHU } from "./club";

export const MOCK_PLAYER_DIMITRI_PAYET: IPlayer = {
    firstname: "Dimitry",
    lastname: "Payet",
    birthday: "1987-3-29",
    profilePhoto: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTc4z0a1kjd1_U-1CYnmUDCkXnNZFNXXunQsCVmhh9XkXhsHgSOqXD-hQurEwtTIuiv",
    playedClubs: [
        {
            ...MOCK_CLUB_OM,
            position: POSITION.MIDFIELD,
            from: "2017-01-30",
            to: null
        },
        {
            ...MOCK_CLUB_WHU,
            position: POSITION.MIDFIELD,
            from: "2015-06-26",
            to: "2017-01-30"
        }
    ]
}

export const MOCK_PLAYER_SAMUEL_GIGOT: IPlayer = {
    firstname: "Samuel",
    lastname: "Gigot",
    birthday: "1993-10-12",
    profilePhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SparM-Orenburg_%2812%29.jpg/375px-SparM-Orenburg_%2812%29.jpg",
    playedClubs: [
        {
            ...MOCK_CLUB_OM,
            position: POSITION.DEFENCE,
            from: "2022-01-30",
            to: null
        },
        {
            ...MOCK_CLUB_SKM,
            position: POSITION.DEFENCE,
            from: "2018-01-30",
            to: "2022-01-30"
        }
    ]
}