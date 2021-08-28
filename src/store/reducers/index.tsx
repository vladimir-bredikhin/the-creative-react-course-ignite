import { combineReducers } from 'redux'
import gameDetailsReducer from './gameDetails'
import gamesReducer from './games'
import isLoadingReducer from './isLoading'

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
  isLoading: isLoadingReducer,
})

export default rootReducer
