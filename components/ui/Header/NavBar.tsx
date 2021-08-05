import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'

type Directory = 'home' | 'projects' | 'blogs'

const NavBar: React.FC = () => {
  const router = useRouter()
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

  return (
    <NavContainer>
      {/* <ThemeToggle /> */}
      <NavLink
        href='/'
        buttonText='Home'
        selected={currentDirectory === 'home'}
      />
      <NavLink
        href='/projects'
        buttonText='Projects'
        selected={currentDirectory === 'projects'}
      />
      <NavLink
        href='/blogs'
        buttonText='Blogs'
        selected={currentDirectory === 'blogs'}
      />
      {/* <NavLink href='#contact' buttonText='Contact' /> */}
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
