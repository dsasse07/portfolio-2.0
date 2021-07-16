import React from 'react'
import styled from 'styled-components'
import LinkButton from './LinkButton'

const NavBar: React.FC = () => {
  return (
    <NavContainer>
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
  /* gap: 1rem; */
  justify-content: center;

  a {
    margin: 0.5rem;
  }
`
