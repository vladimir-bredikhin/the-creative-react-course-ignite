import { fetchPopularGames } from '../../util/API'

const FETCH_GAMES = 'FETCH_GAMES'

export const loadGames = () => async (dispatch: ({}) => void) => {
  const {
    data: { results: popular },
  } = await fetchPopularGames()

  dispatch({
    type: FETCH_GAMES,
    payload: { popular },
  })
}

export { FETCH_GAMES }
