import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useBreakpoint } from '../../../utils/useBreakpointProvider'
import NavLink from './NavLink'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'

type Directory = 'home' | 'projects' | 'blogs'

const NavBar: React.FC = () => {
  const router = useRouter()
  const breakpoint = useBreakpoint()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [currentDirectory, setCurrentDirectory] = useState<Directory>('home')

  useEffect(() => {
    switch (true) {
      case !!/\/projects/.test(router.route):
        setCurrentDirectory('projects')
        break
      case !!/\/blogs/.test(router.route):
        setCurrentDirectory('blogs')
        break
      default:
        setCurrentDirectory('home')
    }
  }, [router.route])

  const directories = [
    {
      href: '/',
      buttonText: 'Home',
      selected: currentDirectory === 'home',
    },
    {
      href: '/projects',
      buttonText: 'Projects',
      selected: currentDirectory === 'projects',
    },
    {
      href: '/blogs',
      buttonText: 'Blogs',
      selected: currentDirectory === 'blogs',
    },
  ]

  const navLinkComponents = directories.map((dir) => {
    return (
      <NavLink
        href={dir.href}
        buttonText={dir.buttonText}
        selected={dir.selected}
        key={dir.href}
      />
    )
  })

  return (
    <NavContainer>
      {breakpoint.md ? (
        <MenuButton
          type='button'
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
          tabIndex={0}
        >
          <MenuIcon />
        </MenuButton>
      ) : (
        navLinkComponents
      )}
      {menuOpen && (
        <Menu aria-expanded={menuOpen}>
          <CloseButton
            type='button'
            onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
            tabIndex={0}
          >
            <CloseIcon />
          </CloseButton>
          {navLinkComponents}
        </Menu>
      )}
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  a {
    margin: 0.5rem;
    font-size: 1.3rem;
  }
`

const MenuButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  right: 20px;
  cursor: pointer;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.fontColor};
  border: none;

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

const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  svg {
    font-size: 2rem;
  }

  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.dangerTextColor};
  box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.dangerTextColor};
  color: ${({ theme }) => theme.dangerTextColor};

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.hoverHighlightColor};
    box-shadow: ${({ theme }) =>
      theme.shadow + ' ' + theme.hoverHighlightColor};
    color: ${({ theme }) => theme.hoverHighlightColor};
  }
`

const unroll = keyframes`
  0% {height:20px; width: 1vw }
  /* 25% {height:20px;  width: 80vw} */
  50% {height:100px; width: 150px }
  100% {height: 200px; width: 300px}
}
`

const Menu = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.fontColor};
  box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.fontColor};
  width: 300px;
  height: 200px;
  padding-top: 40px;
  overflow: hidden;
  animation-name: ${unroll};
  animation-duration: 200ms;
  animation-timing-function: linear;
`
