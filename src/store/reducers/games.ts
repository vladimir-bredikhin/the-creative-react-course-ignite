import { FETCH_GAMES } from '../actions/games'

const initState = {
  popular: [],
  new: [],
  upcoming: [],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default reducer
