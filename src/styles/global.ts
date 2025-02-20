import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['purple']}
  }

  body {
    background: ${props => props.theme['background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 3rem;
    color: ${props => props.theme['base-title']};
    line-height: 130%;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
      line-height: 110%;
    }
  }
`