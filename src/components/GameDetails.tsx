import { motion } from 'framer-motion'
import React, { MouseEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { starEmpty, starFull } from '../img'
import RootState from '../store/model/RootState'
import { platformIcon, resizeImagePath } from '../util/image'

const GameDetails = () => {
  const history = useHistory()
  const { id } = useParams<{ id?: string }>()

  useEffect(() => {
    if (id) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [id])

  const { isLoading, gameDetails: game } = useSelector(
    (state: RootState) => state
  )

  const onCardShadowClick = ({ target }: MouseEvent) => {
    if ((target as HTMLElement).classList.contains('card-shadow')) {
      history.push('/')
    }
  }

  const renderRatingAsStars = (rating: number) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img src={i <= rating ? starFull : starEmpty} key={`star-${i}`} />
      )
    }

    return stars
  }

  return !isLoading && id && Object.keys(game).length ? (
    <CardShadow className='card-shadow' onClick={onCardShadowClick}>
      <Details layoutId={`${id}`}>
        <Stats>
          <div className='rating'>
            <motion.h3 layoutId={`name-${id}`}>{game.name}</motion.h3>
            <p title={`${game.rating}`}>Rating: {game.rating}</p>
            {renderRatingAsStars(Math.floor(game.rating))}
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms.map(({ platform }) => (
                <img
                  key={platform.id}
                  src={platformIcon(platform.slug)}
                  alt={platform.name}
                  title={platform.name}
                />
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <motion.img
            layoutId={`img-${id}`}
            src={resizeImagePath(game.background_image, 1280)}
          />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
        <div className='screenshots'>
          {game.screenshots.map(({ image }) => (
            <img src={resizeImagePath(image, 1280)} key={image} />
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
  z-index: 10;

  img {
    display: block;
    width: 100%;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    display: inline-block;
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
  }
`

const Info = styled(motion.div)`
  text-align: center;
`

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`

const Description = styled(motion.div)`
  margin: 5rem 0;
`

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

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
