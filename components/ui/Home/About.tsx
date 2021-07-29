import styled from 'styled-components'
import profilePhoto from '../../../assets/headshots/formalProfile400.jpg'
import Image from 'next/image'
import SocialLinks from '../SocialLinks/SocialLinks'
import { useAppSelector } from '../../../redux/hooks'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const theme = useAppSelector(({ theme }) => theme.theme)

  return (
    <Container id='about'>
      <Image placeholder='blur' src={theme.banner} alt='Sunset Photo' />
      <PhotoContainer className='flex-item'>
        <Image placeholder='blur' src={profilePhoto} alt='Danny Sasse' />
      </PhotoContainer>
      <TextContainer className='flex-item'>
        <Greeting>Hello!</Greeting>
        <Greeting>I'm Danny,</Greeting>
        <AboutMe>
          An enthusiastic Full Stack Software Developer with experience in React
          and Ruby on Rails. I am passionate about designing and optimizing
          innovative solutions to projects, and trying new technologies.
        </AboutMe>
        <AboutMe>
          I treasure the beauty of the natural world and enjoy exploring it
          through hiking and camping, or from the skies as an aerial
          photographer. I am a science lover and never stop asking "how" or
          "why".
        </AboutMe>
        <SocialLinks />
        <ButtonBar>
          <Button
            href='https://docs.google.com/document/d/1GNOVe6IyuEkw07ej1BxIF6iFBkWTXv-9sNRw-P-2pUI/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            SEE MY RESUME
          </Button>
        </ButtonBar>
      </TextContainer>
    </Container>
  )
}

export default About

const Container = styled.section`
  background: rgba(100, 100, 100, 0.22);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* padding: 1rem; */
  min-height: 70vh;
  /* margin: 10vh 0; */

  .flex-item {
    margin: 1rem;
  }
`
const PhotoContainer = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 400px;
  max-height: 400px;
  /* border-radius: 50%; */
  overflow: hidden;
  border: 2px solid white;

  img {
    width: 100%;
  }
`
const TextContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  padding-top: 0;

  h1 {
    margin: 0;
  }
`

const Greeting = styled.h1`
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
