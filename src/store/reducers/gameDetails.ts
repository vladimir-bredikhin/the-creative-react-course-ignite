import Game from '../../model/Game'
import { FETCH_GAME_DETAILS } from '../actions'

const initState: Game | {} = {}

const reducer = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_GAME_DETAILS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
