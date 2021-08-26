import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface LinkButtonProps {
  href: string
  text: string
  textColor?: string
  height?: number
  width?: number
  external?: boolean
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  text,
  height = 40,
  width = 150,
  textColor = null,
  external = false,
}) => {
  return (
    <>
      {external ? (
        <Button
          href={href}
          target='_blank'
          height={height}
          width={width}
          textColor={textColor}
        >
          <Slider height={height} width={width} />
          {text}
        </Button>
      ) : (
        <Link href={href} passHref>
          <Button height={height} width={width} textColor={textColor}>
            <Slider height={height} width={width} />
            {text}
          </Button>
        </Link>
      )}
    </>
  )
}

export default LinkButton

interface ButtonStyleProps {
  height: number
  width: number
  textColor: string | null
}
const Button = styled.a<ButtonStyleProps>`
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme, textColor }) =>
    textColor ? textColor : theme.activeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: initial;
  border: 1px solid ${({ theme }) => theme.activeColor};
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
  text-decoration: none;
  z-index: 3;
  overflow: hidden;
  transition: 0.4s;
  transition-timing-function: ease-in-out;

  :hover {
    div {
      left: 0;
    }
    color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.highlightColor};
  }
`

interface SliderStyleProps {
  height: number
  width: number
}
const Slider = styled.div<SliderStyleProps>`
  position: absolute;
  top: 0;
  left: -110%;
  transition: 0.4s;
  color: ${({ theme }) => theme.highlightColor};
  background: ${({ theme }) => theme.highlightColor};
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 84% 100%, 0% 100%);
`
