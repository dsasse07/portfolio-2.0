import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'
import Signature from './Signature'
import NavBar from './NavBar'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TogglerContainer>
        <ThemeToggle />
      </TogglerContainer>
      <Signature name='Daniel Sasse' />
      <NavBar />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  font-size: 1.5rem;
  justify-content: space-around;
  padding-bottom: 0;
  padding-top: 50px;
  position: relative;
  margin: 1rem;
  margin-bottom: 0;
`

const TogglerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
