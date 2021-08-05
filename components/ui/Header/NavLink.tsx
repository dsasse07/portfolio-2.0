import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useBreakpoint } from '../../../utils/useBreakpointProvider'

interface NavLinkProps {
  href: string
  buttonText: string
  selected: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, buttonText, selected }) => {
  const breakpoint = useBreakpoint()

  return (
    <Link href={href} passHref>
      {breakpoint.md ? (
        <MenuButton selected={selected}>{buttonText}</MenuButton>
      ) : (
        <NavButton selected={selected}>{buttonText}</NavButton>
      )}
    </Link>
  )
}

export default NavLink

interface ButtonStyleProps {
  selected: boolean
}
const Button = styled.a<ButtonStyleProps>`
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  padding: 0.5rem;
  position: relative;
  text-decoration: none;
  transition: 0.3s;
  outline: none;
`

const NavButton = styled(Button)`
  border-bottom: 3px solid transparent;
  border-bottom-color: ${({ theme, selected }) => selected && theme.sigAngles};

  :hover,
  :focus {
    border-bottom-color: ${({ theme }) => theme.hoverHighlightColor};
  }
`

const MenuButton = styled(Button)`
  width: 250px;

  ::before {
    content: '';
    position: absolute;
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    background: ${({ theme, selected }) =>
      selected ? theme.sigAngles : theme.hoverHighlightColor};
    left: 10px;
    width: 17px;
    height: 17px;
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
  }
  :hover,
  :focus {
    ::before {
      display: block;
    }
  }

  ::after {
    content: ' ';
    position: absolute;
    bottom: -2px;
    height: 1px;
    width: 250px;
    background: ${({ theme }) => theme.subtextColor};
  }
  :last-of-type {
    ::after {
      display: none;
    }
  }
`
