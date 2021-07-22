import styled from 'styled-components'
import Signature from './Signature'
import NavBar from './NavBar'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Signature name='Daniel Sasse' />
      <NavBar />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  align-items: center;
  background: white;
  border-bottom: 1px solid #cccccc;
  box-shadow: 2px 0 10px 0 #cccccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  justify-content: space-around;
  padding-bottom: 0;
  position: fixed;
  width: 100vw;
  z-index: 1;
`
