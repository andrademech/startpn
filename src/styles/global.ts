import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #7C7C8A;
  }

  ::-webkit-scrollbar-thumb {
    background: #323238;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #202024;
  }
`
