import { createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "../interfaces/player";
import { MOCK_PLAYER_DATA_DIMITRI_PAYET, MOCK_PLAYER_DATA_SAMUEL_GIGOT } from "../mocks/player";
import { v4 as uuidv4 } from "uuid"

export const INDEX_NOT_FOUND_ERROR_MESSAGE = 'Cannot find the player index'

export const INITIAL_STATE: IPlayer[] = []

export const INITIAL_FETCH_STATE: IPlayer[] = [
    {
        ...MOCK_PLAYER_DATA_DIMITRI_PAYET,
        id: uuidv4()
    },
    {
        ...MOCK_PLAYER_DATA_SAMUEL_GIGOT,
        id: uuidv4()
    },
]

const playersSlice = createSlice({
    name: "players",
    initialState: INITIAL_STATE,
    reducers: {
        playersFetched(state) {
            if (!state.length) {
                state.push(...INITIAL_FETCH_STATE)
            }
        },
        playerAdded(state, action) {
            const playerToAdd: IPlayer = {
                ...action.payload,
                id: uuidv4() // more 
            }

            // TODO Handle api call here

            state.push(playerToAdd)
        },
        playerUpdated(state, action) {
            const playerToUpdate: IPlayer = {
                ...action.payload
            }

            // TODO Handle api call here

            const playerToUpdateIndex = findPlayerIndex(playerToUpdate, state)
            state.splice(playerToUpdateIndex, 1, playerToUpdate)
        },
        playerDeleted(state, action) {
            const playerToRemove: IPlayer = {
                ...action.payload
            }

            // TODO Handle api call here

            const playerToRemoveIndex = findPlayerIndex(playerToRemove, state)
            state.splice(playerToRemoveIndex, 1)
        }
    }
})

const findPlayerIndex = (player: IPlayer, playerList: IPlayer[]) => {
    const index = playerList.findIndex(({ id }) => {
        return player.id === id
    })
    if (index === -1) {
        throw new Error(INDEX_NOT_FOUND_ERROR_MESSAGE)
    }
    return index
}

export const { playersFetched, playerAdded, playerUpdated, playerDeleted } = playersSlice.actions
export default playersSlice.reducer
