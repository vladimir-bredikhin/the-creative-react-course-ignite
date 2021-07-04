import { combineReducers } from 'redux'
import gameDetailsReducer from './gameDetails'
import gamesReducer from './games'

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
})

export default rootReducer
