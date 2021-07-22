import React from 'react'
import styled from 'styled-components'

interface BannerProps {
  action: () => void
}

const Banner: React.FC<BannerProps> = ({ action }) => {
  const handleUpdateTheme = () => {
    action()
  }

  return (
    <Container>
      <p>
        The system-preferred color scheme has changed. Would you like to update
        the page?
      </p>
      <Button onClick={handleUpdateTheme}>Update</Button>
    </Container>
  )
}

export default Banner

const Container = styled.div`
  background: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.fontColor};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.logoName};

  p {
    font-size: 1.2;
    margin: 0;
  }
`

const Button = styled.button`
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
