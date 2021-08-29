import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { logo } from '../img'

const Nav = () => {
  return (
    <StyledNav>
      <LogoContainer>
        <img src={logo} alt='Ignite' />
        <h1>Ignite</h1>
      </LogoContainer>
      <div className='search'>
        <input type='text' name='' id=' ' />
        <button>Search</button>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    outline: none;

    &:focus {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    }
  }

  button {
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    border-radius: 0 5px 5px 0;
  }
`

const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }
`

export default Nav
