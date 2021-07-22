import React from 'react'
import styled from 'styled-components'
import LinkButton from './LinkButton'
import ThemeToggle from './ThemeToggle'

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <ThemeToggle />
      <LinkButton href='#projects' buttonText='Projects' />
      <LinkButton href='#blogs' buttonText='Blogs' />
      <LinkButton href='#contact' buttonText='Contact' />
    </NavContainer>
  )
}

export default NavBar

const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  a {
    margin: 0.5rem;
  }
`