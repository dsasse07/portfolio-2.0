import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { ReactNode } from 'react'

interface TooltipProps {
  content: string
  children: ReactNode
  delay?: number
  fontSize?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  content = '',
  delay = 100,
  children,
  fontSize = '0.65rem',
}) => {
  const [isActive, setActive] = useState<boolean>(false)
  let timeout: NodeJS.Timeout

  const showTip = (e: React.MouseEvent) => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <TooltipContainer onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {isActive && <TooltipText fontSize={fontSize}>{content}</TooltipText>}
    </TooltipContainer>
  )
}

export default Tooltip

const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`

interface TooltipTextStyleProps {
  fontSize: string
}
const TooltipText = styled.span<TooltipTextStyleProps>`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  border-radius: 4px;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: white;
  background: black;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  ::before {
    content: ' ';
    left: 50%;
    top: 100%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: -6px;
    border-top-color: black;
  }
`
