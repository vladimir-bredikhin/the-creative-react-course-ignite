import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Game from '../components/Game'
import GameDetails from '../components/GameDetails'
import { loadGames } from '../store/actions/games'
import RootState from '../store/model/RootState'

const Home = () => {
  const dispatch = useDispatch()
  const { games } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(loadGames())
  }, [])

  const { popular, fresh, upcoming } = games

  return (
    <GameList>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          <GameDetails />
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <Game game={game} />
            </Link>
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map(game => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <Game game={game} />
            </Link>
          ))}
        </Games>
        <h2>Fresh Games</h2>
        <Games>
          {fresh.map(game => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <Game game={game} />
            </Link>
          ))}
        </Games>
      </AnimateSharedLayout>
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
