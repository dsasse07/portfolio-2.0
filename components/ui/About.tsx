import styled, { keyframes } from 'styled-components'
import profilePhoto from '../../assets/headshots/DannyTravefy.png'
import Image from 'next/image'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Container>
      <PhotoContainer>
        <Image placeholder='blur' src={profilePhoto} alt='Danny Sasse' />
      </PhotoContainer>
      <TextContainer>
        <Greeting>Hi, I'm Danny!</Greeting>
        <Greeting>- Software Engineer -</Greeting>
      </TextContainer>
    </Container>
  )
}

export default About

const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 1;
  width: 100%;

  align-items: center;
  justify-content: center;

  min-height: 70vh;
  margin-bottom: 30vh;
  margin-top: 10vh;
`

const PhotoContainer = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 220px;
  max-height: 220px;
  border-radius: 50%;
  overflow: hidden;
  /* border: 2px solid #283928; */
  border: 2px solid ${({ theme }) => theme.activeColor};
  z-index: 1;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`

const lineSwipe = keyframes`
  0% {
    display: block
    width: 0;
    left: 0;
  }

  20% {
    width: 15%;
    left: 5%;
  }

  40% {
    width: 40%;
  }

  60% {
    width: 40%;
    left: 30%;
  }

  80% {
    width: 15%;
    left: 55%;
  }

  100% {
    width: 0;
    left: 0;
  }
`

const TextContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
  padding: 1rem;
  padding-top: 0;
  font-family: 'Helvetica Neue';
  overflow: none;

  h2 {
    position: relative;
    margin: 0;

    /* :after {
      content: ' ';
      position: absolute;
      bottom: 0.3rem;
      left: 0;
      height: 0.3rem;
      width: 2rem;
      background: ${({ theme }) => theme.highlightColor};
      animation-name: ${lineSwipe} 2s linear infinite;
    } */
  }
`

const Greeting = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  padding: 5px;
`
