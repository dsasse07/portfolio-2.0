import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <Button as='a' href='#projects'>
        Projects
      </Button>
      <Button as='a' href='#blogs'>
        Writing
      </Button>
      <Button as='a' href='#contact'>
        Contact
      </Button>
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

const Button = styled(Link)`
  background: ${(props) => props.theme.itemBackground};
  border: 1px solid white;
  color: ${(props) => props.theme.fontColor};
  display: block;
  font-size: 1.1rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  text-decoration: none;
  transition: 0.2s;
  box-shadow: ${(props) => props.theme.shadow};

  :hover {
    background: ${(props) => props.theme.hoverColor};
  }
`
