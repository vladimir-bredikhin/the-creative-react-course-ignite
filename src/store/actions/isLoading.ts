import { DONE_LOADING, START_LOADING } from '.'

const isLoading = (isLoading: boolean) => {
  return {
    type: isLoading ? START_LOADING : DONE_LOADING,
  }
}

export default isLoading
