import styled from 'styled-components'
import SocialLinks from '../SocialLinks/SocialLinks'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <Container id='contact'>
      <Heading>
        <SectionHeading>Contact Me:</SectionHeading>
      </Heading>
      <Col>
        <DescriptionText>Let's Chat!</DescriptionText>
        <DescriptionText>My Inbox is open:</DescriptionText>
        <LinkText href='mailto:dsasse07@gmail.com'>dsasse07@gmail.com</LinkText>
        <SocialLinks />
      </Col>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  background: rgba(100, 100, 100, 0.22);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 70vh;
  margin: 10vh 0;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0;
`

const DescriptionText = styled.p`
  font-size: 1.3rem;
  margin: 5px;
`

const LinkText = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.logoName};
  margin: 10px 0;

  :hover {
    text-decoration: underline;
  }
`
