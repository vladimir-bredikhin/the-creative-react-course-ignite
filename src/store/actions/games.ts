import {
  fetchNewGames,
  fetchPopularGames,
  fetchUpcomingGames,
} from '../../util/API'

const FETCH_GAMES = 'FETCH_GAMES'

export const loadGames = () => async (dispatch: ({}) => void) => {
  const {
    data: { results: popular },
  } = await fetchPopularGames()

  const {
    data: { results: upcoming },
  } = await fetchUpcomingGames()

  const {
    data: { results: newGames },
  } = await fetchNewGames()

  dispatch({
    type: FETCH_GAMES,
    payload: { popular, upcoming, new: newGames },
  })
}

export { FETCH_GAMES }
