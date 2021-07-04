import { FETCH_GAME_DETAILS } from '.'
import { fetchGameDetails, fetchGameScreenshots } from '../../util/API'

const loadGameDetails = (id: string) => async (dispatch: ({}) => void) => {
  const { data: details } = await fetchGameDetails(id)
  const {
    data: { results: screenshots },
  } = await fetchGameScreenshots(id)

  dispatch({
    type: FETCH_GAME_DETAILS,
    payload: { ...details, screenshots },
  })
}

export { loadGameDetails }
