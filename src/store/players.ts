import { createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "../interfaces/player";
import { MOCK_PLAYER_DATA_DIMITRI_PAYET } from "../mocks/player";

const playersSlice = createSlice({
    name: "players",
    initialState: [] as IPlayer[],
    reducers: {
        playerAdded(state) {

            // TODO Handle api call here

            state.push({
                ...MOCK_PLAYER_DATA_DIMITRI_PAYET,
                // Mock id generation with random because MOCK DATA is equals
                // Target ==> Hash from data with check on the existing list
                id: `${Math.floor(Math.random() * 1000000)}`
            })
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
        throw new Error('Cannot find the player index')
    }
    return index
}

export const { playerAdded, playerUpdated, playerDeleted } = playersSlice.actions
export default playersSlice.reducer
