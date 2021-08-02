import styled from 'styled-components'
import profilePhoto from '../../../assets/headshots/formalProfile400.jpg'
import Image from 'next/image'
import SocialLinks from '../SocialLinks/SocialLinks'
import { useAppSelector } from '../../../redux/hooks'
import themeSlice from '../../../redux/themeSlice'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const theme = useAppSelector(({ theme }) => theme.theme)

  return (
    <Container id='about'>
      <BannerContainer>
        <BannerOverlay />
        <Image
          layout='fill'
          placeholder='blur'
          src={theme.banner}
          alt='Sunset Photo'
          objectFit='cover'
        />
      </BannerContainer>
      <OverlayContainer>
        <PhotoContainer className='flex-item'>
          <Image placeholder='blur' src={profilePhoto} alt='Danny Sasse' />
        </PhotoContainer>
        <TextContainer className='flex-item'>
          <Greeting>Hi, I'm Danny</Greeting>
          <Greeting>Software Engineer.</Greeting>
          {/* <SocialLinks />
          <ButtonBar>
            <Button
              href='https://docs.google.com/document/d/1GNOVe6IyuEkw07ej1BxIF6iFBkWTXv-9sNRw-P-2pUI/edit?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              SEE MY RESUME
            </Button>
          </ButtonBar> */}
        </TextContainer>
      </OverlayContainer>
    </Container>
  )
}

export default About

const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  align-items: center;
  /* padding: 1rem; */
  min-height: 70vh;
  margin-bottom: 30vh;

  .flex-item {
    margin: 1rem;
  }
`

const BannerContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  top: -60px;
  margin: 0;
  padding: 0;
  left: 0;
  z-index: -1;
`
const BannerOverlay = styled.div`
  position: absolute;
  background: rgba(33, 29, 30, 0.45);
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  left: 0;
  z-index: 1;
`

const OverlayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10vw;
`

const PhotoContainer = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 220px;
  max-height: 220px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #283928;
  z-index: 1;

  img {
    width: 100%;
  }
`
const TextContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: rgba(250, 250, 250, 0.9); */
  color: ${({ theme }) => theme.sigColor};
  padding: 1rem;
  padding-top: 0;
  font-family: 'Helvetica Neue';

  h2 {
    margin: 0;
  }
`

const Greeting = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  padding: 5px;
`

const AboutMe = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 1.17rem;

  :nth-of-type(2) {
    margin-top: 0;
  }
`

const ButtonBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`

const Button = styled.a`
  padding: 8px;
  background: ${(props) => props.theme.itemBackground};
  border: 1px solid ${(props) => props.theme.resumeBorder};
  box-shadow: ${(props) => props.theme.shadow};
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.resumeColor};
  font-weight: bold;
  font-size: 0.9rem;

  :hover {
    transform: scale(1.1);
  }
`
