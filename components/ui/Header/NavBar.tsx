import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useBreakpoint } from '../../../utils/useBreakpointProvider'
import NavLink from './NavLink'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import OverlayMenu from '../OverlayMenu'

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
    <>
      <NavContainer>
        {breakpoint.md ? (
          <OverlayMenu>{navLinkComponents}</OverlayMenu>
        ) : (
          navLinkComponents
        )}
      </NavContainer>
    </>
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
