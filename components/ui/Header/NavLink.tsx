import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useBreakpoint } from '../../../utils/useBreakpointProvider'
import { removeFocus } from '../../../utils/removeFocus'

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
        <MenuLinkButton
          selected={selected}
          onClick={(e) => removeFocus(e.target)}
        >
          {buttonText}
        </MenuLinkButton>
      ) : (
        <NavLinkButton
          selected={selected}
          onClick={(e) => removeFocus(e.target)}
        >
          {buttonText}
        </NavLinkButton>
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
  padding: 10px;
  position: relative;
  text-decoration: none;
  transition: 0.3s;
  outline: none;
`

const NavLinkButton = styled(Button)`
  border-bottom: 3px solid transparent;
  border-bottom-color: ${({ theme, selected }) =>
    selected && theme.activeColor};

  :hover,
  :focus {
    border-bottom-color: ${({ theme }) => theme.highlightColor};
  }
`

const MenuLinkButton = styled(Button)`
  width: 150px;

  ::before {
    content: '';
    position: absolute;
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    background: ${({ theme, selected }) =>
      selected ? theme.activeColor : theme.highlightColor};
    top: 15px;
    left: 10%;
    width: 14px;
    height: 14px;
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
    bottom: -10px;
    height: 1px;
    width: 45vw;
    max-width: 300px;
    background: ${({ theme }) => theme.subtextColor};
  }
  :last-of-type {
    ::after {
      display: none;
    }
  }
`
