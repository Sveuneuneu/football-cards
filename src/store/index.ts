import { configureStore } from '@reduxjs/toolkit'
import playersReducer from './players'

export const store = configureStore({
  reducer: {
    players: playersReducer
  }
})