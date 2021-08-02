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
    --lt_green: #40c115;
    --lt_gray: #2D2D2D;
    --dk_gray: #1e1d1e;
    --gray: #c0c0c0;

    --palegreen:#A8EFDD;
    --darkblue:#1E357D;
    --yellow: #ffde3d;
    --twitterBlue: #1CA3F1;
    --slate: #2f3538;
    --burntred: #2C0F0D;
    --burntyellow: #e09900;
    --pink: #FC3795;
    --dk_green: #797D62;
    --salmon: #D9AE94;
    --banana: #F1DCA7;
    --yellow_red: #FFCB69;
    --red_orange: #D08C60;
    --brown: #997B66;
  }
  body {
    background: ${(props) => props.theme.background};
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

  /* .glass {
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 11.0px );
    -webkit-backdrop-filter: blur( 11.0px );
    border-radius: 10px;
  } */

`

export default GlobalStyle
