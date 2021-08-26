import { createGlobalStyle } from 'styled-components'
import { theme } from './themes'
// import AugustinaWoff from './fonts/Agustina.woff'

/**
 * Use type inference on one of the theme objects
 * to create the type interface for the Theme
 */
declare module 'styled-components' {
  type Theme = typeof theme
  export interface DefaultTheme extends Theme {}
}

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fcfcfc;
    --gray: #c0c0c0;
    --lt_green: #40c115;
    --danger: #e81e1e;
    --golden: #ffec1c;
  }
  
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
    font-family: 'Comfortaa', cursive;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    
    margin: 0;
    /* min-height: 100vh; */
    transition: all 0.2s;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* overflow-y: ${(props) => props.theme.scrollY}; */
  }

`

export default GlobalStyle
