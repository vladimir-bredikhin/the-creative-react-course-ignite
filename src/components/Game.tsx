import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import IGame from '../model/Game'
import { loadGameDetails } from '../store/actions/gameDetails'
import { resizeImagePath } from '../util/image'

const Game: React.FC<{ game: IGame }> = ({ game }) => {
  const { id, name, released, background_image: img } = game

  const dispatch = useDispatch()
  const onLoadGameDetails = () => {
    dispatch(loadGameDetails(id))
  }

  return (
    <StyledGame onClick={onLoadGameDetails}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={resizeImagePath(img, 640)} alt={name} />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
