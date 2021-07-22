import { createGlobalStyle } from 'styled-components'
import { lightTheme } from './themes'
// import AugustinaWoff from './fonts/Agustina.woff'

/**
 * Use type inference on one of the theme objects
 * to create the type interface for the Theme
 */
declare module 'styled-components' {
  type Theme = typeof lightTheme
  export interface DefaultTheme extends Theme {}
}

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fcfcfc;
    --palegreen:#A8EFDD;
    --darkblue:#1E357D;
    --gray: #686a6b;
    --yellow: #ffde3d;
    --twitterBlue: #1CA3F1;
    --slate: #2f3538;
    --burntred: #2C0F0D;
    --burntyellow: #e09900;
    --pink: #FC3795;
    --dk_green: #797D62;
    --lt_green: #9B9B7A;
    --salmon: #D9AE94;
    --banana: #F1DCA7;
    --yellow_red: #FFCB69;
    --red_orange: #D08C60;
    --brown: #997B66;
  }
  body {
    background: ${(props) => props.theme.background};
    background: ${(props) => props.theme.gradient};
    color: ${(props) => props.theme.fontColor};
    
    font-family: 'Comfortaa', cursive;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    
    margin: 0;
    min-height: 100vh;
    transition: all 0.2s;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


`

export default GlobalStyle
