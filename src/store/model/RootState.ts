import Game from '../../model/Game'
import GamesState from './GamesState'

export default interface RootState {
  games: GamesState
  gameDetails: Game
}
