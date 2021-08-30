import { CLEAR_SEARCHED, GET_GAMES, GET_SEARCHED } from '.'
import {
  fetchFreshGames,
  fetchPopularGames,
  fetchUpcomingGames,
  searchGamesByName
} from '../../util/API'
import isLoading from './isLoading'

export const loadGames = () => async (dispatch: ({}) => void) => {
  dispatch(isLoading(true))

  const {
    data: { results: popular },
  } = await fetchPopularGames()

  const {
    data: { results: upcoming },
  } = await fetchUpcomingGames()

  const {
    data: { results: fresh },
  } = await fetchFreshGames()

  dispatch({
    type: GET_GAMES,
    payload: { popular, upcoming, fresh },
  })

  dispatch(isLoading(false))
}

export const searchGames = (name: string) => async (dispatch: ({}) => void) => {
  dispatch(isLoading(true))

  const {
    data: { results: searched },
  } = await searchGamesByName(name)

  dispatch({
    type: GET_SEARCHED,
    payload: { searched },
  })

  dispatch(isLoading(false))
}

export const clearSearched = () => {
  return {
    type: CLEAR_SEARCHED,
  }
}

export { GET_GAMES }
