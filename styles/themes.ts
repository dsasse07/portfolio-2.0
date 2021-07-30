// import sunsetXs from '../assets/banners/Sunset-Pano400.png'
// import sunsetMd from '../assets/banners/Sunset-Pano1024.png'
// import sunsetLg from '../assets/banners/Sunset-Pano1600.png'
// import sunriseXs from '../assets/banners/Sunrise-Pano400.png'
// import sunriseMd from '../assets/banners/Sunrise-Pano1024.png'
// import sunriseLg from '../assets/banners/Sunrise-Pano1600.png'
import sunset from '../assets/banners/Sunset.png'
import sunrise from '../assets/banners/Sunrise.png'

export const lightTheme = {
  banner: sunrise,
  background: '#bffed4',
  headerOpacity: '0',
  // gradient: "linear-gradient(0deg, rgba(191,254,212,1) 4%, rgba(148,187,233,1) 100%)",
  gradient:
    'linear-gradient(0deg, rgba(191,254,212,1) 0%, rgba(163,227,255,1) 100%)',
  fontColor: 'black',
  logoAngles: 'var(--gray)',
  logoName: 'var(--darkblue)',
  itemBackground: 'var(--white)',
  shadow: '0px 0px 6px 1px var(--slate)',
  hoverColor: 'var(--palegreen)',
  resumeButton: 'var(--palegreen)',
  resumeBorder: 'white',
  resumeColor: 'black',
  gitBackground: 'black',
  topButton: 'var(--pink)',
  sliderLeft: '3px',
  togglerColor: 'var(--white)',
}

export const darkTheme = {
  banner: sunset,
  background: '#77130d',
  headerOpacity: '0',
  gradient:
    'linear-gradient(0deg, rgba(119,19,13,1) 4%, rgba(15,12,11,1) 100%)',
  fontColor: 'var(--white)',
  logoAngles: 'var(--twitterBlue)',
  logoName: 'var(--yellow)',
  itemBackground: 'var(--slate)',
  shadow: '0px 0px 6px 1px var(--yellow)',
  hoverColor: 'var(--burntred)',
  resumeButton: 'var(--burntyellow)',
  resumeBorder: 'var(--yellow)',
  resumeColor: 'var(--yellow)',
  gitBackground: 'white',
  topButton: 'var(--darkblue)',
  sliderLeft: '31px',
  togglerColor: 'var(--yellow)',
}
