import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Game from '../components/Game'
import GameDetails from '../components/GameDetails'
import { loadGames } from '../store/actions/games'
import RootState from '../store/model/RootState'

const Home = () => {
  const { id } = useParams<{ id?: string }>()

  const dispatch = useDispatch()
  const { popular, fresh, upcoming } = useSelector(
    (state: RootState) => state.games
  )

  useEffect(() => {
    dispatch(loadGames())
  }, [])

  return (
    <GameList>
      {id && <GameDetails />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(game => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map(game => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h2>Fresh Games</h2>
      <Games>
        {fresh.map(game => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 5rem 3rem;
`

export default Home
