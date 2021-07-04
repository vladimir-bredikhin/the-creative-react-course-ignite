import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import RootState from '../store/model/RootState'

const GameDetails = () => {
  const game = useSelector((state: RootState) => state.gameDetails)

  return Object.keys(game).length ? (
    <CardShadow>
      <Details>
        <div className='stats'>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className='info'>
            <h3>Platforms</h3>
            <div className='platforms'>
              {game.platforms.map(({ platform }) => (
                <h3 key={platform.id}>{platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className='media'>
          <img src={game.background_image} />
        </div>
        <div className='description'>
          <p>{game.description_raw}</p>
        </div>
        <div className='screenshots'>
          {game.screenshots.map(({ image }) => (
            <img src={image} key={image} />
          ))}
        </div>
      </Details>
    </CardShadow>
  ) : null
}

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: #ffffff;
  position: absolute;
  left: 10%;
  color: #000000;

  img {
    width: 100%;
  }
`

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff6767;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`

export default GameDetails
