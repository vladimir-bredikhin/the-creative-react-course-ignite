import { CLEAR_SEARCHED, GET_SEARCHED } from '../actions'
import { GET_GAMES } from '../actions/games'
import GamesState from '../model/GamesState'

const initState: GamesState = {
  popular: [],
  fresh: [],
  upcoming: [],
  searched: [],
}

const reducer = (
  state = initState,
  action: { type: string; payload?: GamesState }
) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, ...action.payload }
    case GET_SEARCHED:
      return { ...state, ...action.payload }
    case CLEAR_SEARCHED:
      return { ...state, searched: [] }
    default:
      return state
  }
}

export default reducer
