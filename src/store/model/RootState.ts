import Game from '../../model/Game'
import GamesState from './GamesState'

export default interface RootState {
  isLoading: boolean
  games: GamesState
  gameDetails: Game
}
