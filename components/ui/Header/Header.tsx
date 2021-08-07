import styled from 'styled-components'
import Signature from './Signature'
import NavBar from './NavBar'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { adjustHeaderOpacity } from '../../../redux/themeSlice'
import { convertToRGB } from '../../../utils/convertToRGB'
import { useBreakpoint } from '../../../utils/useBreakpointProvider'

const Header: React.FC = () => {
  const theme = useAppSelector(({ theme }) => theme)
  const breakpoint = useBreakpoint()
  const dispatch = useAppDispatch()
  const baseBorder = convertToRGB('#cccccc').join(',')
  const baseBoxShadow = convertToRGB('#cccccc').join(',')

  const handleScroll = (_: Event) => {
    let y =
      0 + ((window.scrollY || window.pageYOffset) / window.innerHeight) * 1.5
    // ensure y is always >= 1 (due to Safari's elastic scroll)
    y = y < 0 ? 0 : y
    y = y > 1 ? 1 : y
    dispatch(adjustHeaderOpacity(y.toString()))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer
      bgColor={`rgba(${convertToRGB(theme.theme.background).join(',')}, ${
        theme.theme.headerOpacity
      })`}
      boxShadow={`rgba(${baseBoxShadow}, ${theme.theme.headerOpacity})`}
      borderColor={`rgba(${baseBorder}, ${theme.theme.headerOpacity})`}
      collapsed={breakpoint.md}
    >
      <Signature name='Daniel Sasse' />
      <NavBar />
    </HeaderContainer>
  )
}

export default Header

interface HeaderContainerStyleProps {
  bgColor: string
  borderColor: string
  boxShadow: string
  collapsed: boolean
}

interface HeaderContainerStyleProps {}
const HeaderContainer = styled.header<HeaderContainerStyleProps>`
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  box-shadow: 2px 0 10px 0 ${({ boxShadow }) => boxShadow};
  display: flex;
  flex-wrap: wrap;
  font-size: 1.3rem;
  justify-content: ${({ collapsed }) =>
    collapsed ? 'center' : 'space-around'};
  padding-bottom: 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 5;
  /* overflow-x: hidden; */
  overflow-y: visible;
  /* overflow-x: hidden; */
`
