import { GET_GAME_DETAILS } from '.'
import { fetchGameDetails, fetchGameScreenshots } from '../../util/API'
import isLoading from './isLoading'

const loadGameDetails = (id: string) => async (dispatch: ({}) => void) => {
  dispatch(isLoading(true))

  const { data: details } = await fetchGameDetails(id)
  const {
    data: { results: screenshots },
  } = await fetchGameScreenshots(id)

  dispatch({
    type: GET_GAME_DETAILS,
    payload: { ...details, screenshots },
  })

  dispatch(isLoading(false))
}

export { loadGameDetails }
