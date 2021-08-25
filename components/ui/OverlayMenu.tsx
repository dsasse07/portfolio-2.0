import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleMobileMenu } from '../../redux/themeSlice'

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

  const openMenu = () => {
    dispatch(toggleMobileMenu())
    setTimeout(() => {
      setRenderOverlay(true)
    }, 0)
  }

  const closeMenu = () => {
    setRenderOverlay(false)
    setTimeout(() => {
      dispatch(toggleMobileMenu())
    }, 300)
  }

  return (
    <Container>
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

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
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
  transition: 500ms;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100vw)'};
`

interface UnderlayStyleProps {
  isOpen: boolean
}

const Underlay = styled.div<UnderlayStyleProps>`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(150, 150, 20, 0.6);
  z-index: 0;
  transition: 400ms;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
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
    border: 1px solid ${({ theme }) => theme.hoverHighlightColor};
    box-shadow: ${({ theme }) =>
      theme.shadow + ' ' + theme.hoverHighlightColor};
    color: ${({ theme }) => theme.hoverHighlightColor};
  }

  svg {
    font-size: 2rem;
  }
`
