import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface NavLinkProps {
  href: string
  buttonText: string
  selected: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, buttonText, selected }) => {
  return (
    <Link href={href} passHref>
      <Button selected={selected}>{buttonText}</Button>
    </Link>
  )
}

export default NavLink

interface ButtonStyleProps {
  selected: boolean
}
const Button = styled.a<ButtonStyleProps>`
  border-bottom: 3px solid transparent;
  border-bottom: 3px solid
    ${({ theme, selected }) => (selected ? theme.sigAngles : 'transparent')};
  color: ${({ theme }) => theme.fontColor};
  display: block;
  font-size: 1.1rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  text-decoration: none;
  transition: 0.3s;
  outline: none;

  :hover,
  :focus {
    border-bottom: 3px solid ${({ theme }) => theme.hoverHighlightColor};
  }
`
