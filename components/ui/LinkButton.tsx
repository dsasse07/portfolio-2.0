import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface LinkButtonProps {
  href: string
  buttonText: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, buttonText }) => {
  return (
    <Link href={href} passHref>
      <Button>{buttonText}</Button>
    </Link>
  )
}

export default LinkButton

const Button = styled.a`
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
