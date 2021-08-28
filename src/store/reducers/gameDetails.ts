import Game from '../../model/Game'
import { GET_GAME_DETAILS } from '../actions'

const initState: Game | {} = {}

const reducer = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case GET_GAME_DETAILS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
