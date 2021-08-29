import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    color: #333;
  }
  
  h2 {
    font-family: 'Abril Fatface', cursive;
    font-size: 3rem;
    font-weight: lighter
  }

  h3 {
    font-size: 1.3rem;
    padding: 1.5rem 0;
  }

  p {
    font-size: 1.2rem;
    line-height: 2;
    color: #696969;
  }

  a {
    text-decoration: none;
    font-size: 3rem;
  }

  .no-scroll {
    overflow: hidden;
  }
`

export default GlobalStyle
