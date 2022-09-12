import { IClub } from "./club"

export interface IPlayer {
    firstname: string,
    lastname: string,
    birthday: string,
    profilePhoto: string,
    playedClubs: [IPlayedClub, ...IPlayedClub[]]
}

export interface IPlayedClub extends IClub{
    from: string,
    to: string | null,
    position: POSITION
}

export enum POSITION {
    ATTACK = "ATTACK",
    DEFENCE = "DEFENCE",
    GOAL = "GOAL",
    MIDFIELD = "MIDFIELD"
}