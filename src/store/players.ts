import { createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "../interfaces/player";
import { MOCK_PLAYER_DIMITRI_PAYET } from "../mocks/player";

const playersSlice = createSlice({
    name: "players",
    initialState: [] as IPlayer[],
    reducers: {
        playerAdded(state) {
            state.push({
                // todo
                ...MOCK_PLAYER_DIMITRI_PAYET
            })
        },
        playerUpdate(state, action) {
            // todo
        }
    }
})

export const { playerAdded, playerUpdate } = playersSlice.actions
export default playersSlice.reducer
