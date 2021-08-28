import { GET_GAMES } from '.'
import {
  fetchFreshGames,
  fetchPopularGames,
  fetchUpcomingGames
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

export { GET_GAMES }
