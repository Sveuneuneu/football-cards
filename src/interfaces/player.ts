import { IClub } from "./club"

export interface IPlayer {
    firstname: string,
    lastname: string,
    birthday: Date,
    profilePhoto: string,
    playedClub: IPlayedClub[]
}

export interface IPlayedClub extends IClub{
    from: Date,
    to: Date | null,
    position: POSITION
}

export enum POSITION {
    ATTACK = "ATTACK",
    DEFENCE = "DEFENCE",
    GOAL = "GOAL",
    MIDFIELD = "MIDFIELD"
}