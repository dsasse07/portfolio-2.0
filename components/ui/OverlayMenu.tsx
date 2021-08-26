import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { showMobileMenu } from '../../redux/themeSlice'

interface OverlayMenuProps {
  children: ReactNode
}
const OverlayMenu: React.FC<OverlayMenuProps> = ({ children }) => {
  const menuOpen = useAppSelector(({ theme }) => theme.showMobileMenu)
  const dispatch = useAppDispatch()
  /* 
  Create separate state for the rendering of the menu to show animations
  prior to unmount
  */
  const [renderOverlay, setRenderOverlay] = useState<boolean>(false)

  // Reset mobile menu status on unexpedted unmount (ex: resize)
  useEffect(() => {
    return () => {
      dispatch(showMobileMenu(false))
    }
  }, [])

  const openMenu = () => {
    dispatch(showMobileMenu(true))
    setTimeout(() => {
      setRenderOverlay(true)
    }, 0)
  }

  const closeMenu = () => {
    setRenderOverlay(false)
    setTimeout(() => {
      dispatch(showMobileMenu(false))
    }, 300)
  }

  return (
    <Container isOpen={menuOpen}>
      <MenuButton
        type='button'
        onClick={menuOpen ? closeMenu : openMenu}
        tabIndex={0}
      >
        {renderOverlay ? <CloseIcon /> : <MenuIcon />}
      </MenuButton>
      {menuOpen && (
        <>
          <Underlay isOpen={renderOverlay} onClick={closeMenu} />
          <Menu aria-expanded={renderOverlay} isOpen={renderOverlay}>
            {children}
          </Menu>
        </>
      )}
    </Container>
  )
}

export default OverlayMenu

interface ContainerStyleProps {
  isOpen: boolean
}
const Container = styled.div<ContainerStyleProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '60px')};
  width: ${({ isOpen }) => (isOpen ? '100vw' : '60px')};
  overflow: hidden;
`

interface MenuStyleProps {
  isOpen: boolean
}

const Menu = styled.nav<MenuStyleProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.background};
  border-left: 1px solid ${({ theme }) => theme.fontColor};
  width: 60vw;
  max-width: 500px;
  height: 100vh;
  padding-top: 15vh;
  z-index: 1;
  transition: 200ms;
  transform: ${({ isOpen }) => !isOpen && 'translateX(60vw)'};
`

interface UnderlayStyleProps {
  isOpen: boolean
}

const Underlay = styled.div<UnderlayStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ isOpen }) =>
    isOpen ? 'rgba(150, 150, 20, 0.6)' : 'rgba(150, 150, 20, 0)'};
  z-index: 0;
  transition: 200ms;
`

const MenuButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  top: 10px;
  right: 20px;
  cursor: pointer;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.fontColor};
  border: none;
  z-index: 100;

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.highlightColor};
    box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.highlightColor};
    color: ${({ theme }) => theme.highlightColor};
  }

  svg {
    font-size: 2rem;
  }
`
