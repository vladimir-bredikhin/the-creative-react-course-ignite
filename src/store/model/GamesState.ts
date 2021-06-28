import Game from '../../model/Game'

export default interface GamesState {
  popular: Game[]
  fresh: Game[]
  upcoming: Game[]
  searched: Game[]
}
