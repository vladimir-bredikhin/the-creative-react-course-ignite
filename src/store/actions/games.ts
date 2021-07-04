import { FETCH_GAMES } from '.'
import {
  fetchFreshGames,
  fetchPopularGames,
  fetchUpcomingGames,
} from '../../util/API'

export const loadGames = () => async (dispatch: ({}) => void) => {
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
    type: FETCH_GAMES,
    payload: { popular, upcoming, fresh },
  })
}

export { FETCH_GAMES }
