import { socials } from '../../../data/socials'
import styled from 'styled-components'
import SocialLink from './SocialLink'

const SocialLinks = () => {
  const socialLinks = socials.map((social, index) => {
    return <SocialLink key={index} social={social} />
  })

  return <Container className='social'>{socialLinks}</Container>
}
export default SocialLinks

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  a {
    margin: 0.35rem;
  }
`
