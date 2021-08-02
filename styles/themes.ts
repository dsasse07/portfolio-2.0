// import sunsetXs from '../assets/banners/Sunset-Pano400.png'
// import sunsetMd from '../assets/banners/Sunset-Pano1024.png'
// import sunsetLg from '../assets/banners/Sunset-Pano1600.png'
// import sunriseXs from '../assets/banners/Sunrise-Pano400.png'
// import sunriseMd from '../assets/banners/Sunrise-Pano1024.png'
// import sunriseLg from '../assets/banners/Sunrise-Pano1600.png'
import sunset from '../assets/banners/Sunset.png'
import sunrise from '../assets/banners/Sunrise.png'
import tree from '../assets/banners/pexels-tobi.jpg'

export const lightTheme = {
  banner: tree,
  background: '#1e1d1e',
  sectionBackground: 'var(--lt_gray)',
  headerOpacity: '0',
  sigColor: 'var(--white)',
  fontColor: 'var(--white)',
  darkFontColor: 'var(--dk_gray)',
  subtextColor: 'var(--gray)',
  sigAngles: 'var(--lt_green)',
  logoName: '#1E357D', // var(--dark-blue)
  itemBackground: 'var(--white)',
  shadow: '0px 0px 6px 1px var(--lt_green)',
  hoverColor: 'var(--palegreen)',
  resumeButton: 'var(--palegreen)',
  resumeBorder: 'white',
  resumeColor: 'black',
  gitBackground: 'black',
  sliderLeft: '3px',
  togglerColor: 'var(--white)',
  gitHubColors: {
    NONE: '#0F1218',
    FIRST_QUARTILE: '#14541c',
    SECOND_QUARTILE: '#248c34',
    THIRD_QUARTILE: '#2ead43',
    FOURTH_QUARTILE: '#39D353',
  },
}

export const darkTheme = {
  banner: sunset,
  // background: '#77130d',
  background: '#1c1c1c',
  sectionBackground: 'var(--lt_gray)',
  headerOpacity: '0',
  sigStart: '#ffde3d',
  sigEnd: '#ffde3d',
  fontColor: 'var(--white)',
  darkFontColor: 'var(dk_gray)',
  logoAngles: 'var(--twitterBlue)',
  logoName: 'var(--yellow)',
  itemBackground: 'var(--slate)',
  shadow: '0px 0px 6px 1px var(--yellow)',
  hoverColor: 'var(--burntred)',
  resumeButton: 'var(--burntyellow)',
  resumeBorder: 'var(--yellow)',
  resumeColor: 'var(--yellow)',
  gitBackground: 'white',
  sliderLeft: '31px',
  togglerColor: 'var(--yellow)',
  subtextColor: 'var(--gray)',
}
