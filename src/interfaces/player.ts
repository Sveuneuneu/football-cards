export interface IPlayer extends IPlayerDTO {
    id: string
}

export interface IPlayerDTO {
    firstname: string,
    lastname: string,
    birthday: string,
    profilePhoto: string,
    position: POSITION
}

export enum POSITION {
    ATTACK = "ATTACK",
    DEFENCE = "DEFENCE",
    GOAL = "GOAL",
    MIDFIELD = "MIDFIELD"
}