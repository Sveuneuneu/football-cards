import { IPlayerDTO, POSITION } from "../interfaces/player";

export const MOCK_PLAYER_DATA_DIMITRI_PAYET: IPlayerDTO = {
    firstname: "Dimitry",
    lastname: "Payet",
    birthday: "1987-3-29",
    position: POSITION.MIDFIELD,
    profilePhoto: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTc4z0a1kjd1_U-1CYnmUDCkXnNZFNXXunQsCVmhh9XkXhsHgSOqXD-hQurEwtTIuiv",
}

export const MOCK_PLAYER_DATA_SAMUEL_GIGOT: IPlayerDTO = {
    firstname: "Samuel",
    lastname: "Gigot",
    birthday: "1993-10-12",
    position: POSITION.MIDFIELD,
    profilePhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/SparM-Orenburg_%2812%29.jpg/375px-SparM-Orenburg_%2812%29.jpg",
}