import styled from 'styled-components'
import profilePhoto from '../../assets/headshots/formalProfile400.jpg'
import Image from 'next/image'

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Container>
      <PhotoContainer className='flex-item'>
        <Image placeholder='blur' src={profilePhoto} alt='Danny Sasse' />
      </PhotoContainer>
      <TextContainer className='flex-item'>
        <Greeting>Hi, I'm Danny</Greeting>
        <Greeting>Software Engineer.</Greeting>
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
  margin-top: 10vw;

  .flex-item {
    margin: 1rem;
  }
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
  color: ${({ theme }) => theme.fontColor};
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
