import { IClub } from "./club"

export interface IPlayerCard { }

export interface IPlayer extends IPlayerData {
    id: string
}

export interface IPlayerData {
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