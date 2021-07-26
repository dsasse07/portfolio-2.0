import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { ReactNode } from 'react'

interface TooltipProps {
  content: string
  delay?: number
  children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({
  content = '',
  delay = 200,
  children,
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
      {isActive && <TooltipText>{content}</TooltipText>}
    </TooltipContainer>
  )
}

export default Tooltip

const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`

const TooltipText = styled.span`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  border-radius: 4px;
  left: -50px;
  transform: translateX(-300px);
  transform: translateY(-40px);
  padding: 6px;
  color: white;
  background: black;
  font-size: 1rem;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
`
