const initState = {
  popular: [],
  new: [],
  upcoming: [],
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state }
    default:
      return state
  }
}

export default reducer
