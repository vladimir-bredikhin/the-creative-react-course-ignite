import { DONE_LOADING, START_LOADING } from '../actions'

const reducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case START_LOADING:
      return true
    case DONE_LOADING:
      return false
    default:
      return state
  }
}

export default reducer
