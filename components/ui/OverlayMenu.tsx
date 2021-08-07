import React, { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

interface OverlayMenuProps {
  children: ReactNode
  isOpen: boolean
}
const OverlayMenu: React.FC<OverlayMenuProps> = ({ children, isOpen }) => {
  const [visibility, setVisibility] = useState<string>('0')

  useEffect(() => {
    setTimeout(() => {
      setVisibility('1')
    }, 0)

    return () => {
      setTimeout(() => {
        setVisibility('0')
      }, 0)
    }
  }, [])

  return (
    <Container>
      <Underlay isOpen={isOpen} visibility={visibility} />
      <Menu aria-expanded={isOpen} isOpen={isOpen}>
        {children}
      </Menu>
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

const slideLeft = keyframes`
  0%{transform: translateX(100vw);}
  100%{transform: translateX(0);}
`

const fadeIn = keyframes`
  0%{opacity: 0}
  100%{opacity: 1}
`

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
  height: 100vh;
  padding-top: 15vh;
  z-index: 1;
  animation: ${slideLeft};
  animation-duration: 600ms;
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

interface UnderlayStyleProps {
  isOpen: boolean
  visibility: string
}

const Underlay = styled.div<UnderlayStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(150, 150, 20, 0.6);
  z-index: 0;
  transition: 1000ms;
  opacity: ${({ visibility }) => visibility};
`
