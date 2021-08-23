import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import RootState from '../store/model/RootState'

const GameDetails = () => {
  const game = useSelector((state: RootState) => state.gameDetails)

  return !!Object.keys(game).length ? (
    <CardShadow>
      <Details>
        <Stats>
          <div className='rating'>
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms.map(({ platform }) => (
                <h3 key={platform.id}>{platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
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
  padding: 2rem 5rem;
  background: #ffffff;
  position: absolute;
  left: 10%;
  color: #000000;

  img {
    width: 100%;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;


const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

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
