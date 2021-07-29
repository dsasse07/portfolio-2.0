import styled from 'styled-components'
import Signature from './Signature'
import NavBar from './NavBar'
import { useState, useEffect } from 'react'

const Header: React.FC = () => {
  const [atTop, setAtTop] = useState<string>('transparent')

  const [red, green, blue] = [69, 111, 225]
  const section1 = document.querySelector('.section1')

  window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
    setAtTop(`rgb(${r}, ${g}, ${b})`)
  })

  // useEffect(() => {
  //   window.addEventListener('scroll', handleTopScroll)
  //   return () => {
  //     console.log('removing listener')
  //     window.removeEventListener('scroll', handleTopScroll)
  //   }
  // }, [])

  return (
    <HeaderContainer atTop={atTop}>
      <Signature name='Daniel Sasse' />
      <NavBar />
    </HeaderContainer>
  )
}

export default Header

interface HeaderContainerStyleProps {
  atTop: string
}
const HeaderContainer = styled.header<HeaderContainerStyleProps>`
  align-items: center;
  background: ${({ atTop }) => atTop};
  border-bottom: 1px solid #cccccc;
  box-shadow: 2px 0 10px 0 #cccccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  justify-content: space-around;
  padding-bottom: 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  /* position: absolute; */
  width: 100%;
  margin-bottom: -100px;
  top: 0;
  z-index: 3;
`
