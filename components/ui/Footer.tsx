import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <Text>Built with</Text>
      <Text>Typescript + Next.JS + GraphQL + custom Styled Components</Text>
      <Link href='https://github.com/dsasse07/portfolio' passHref>
        <EmailLink>View Source Code</EmailLink>
      </Link>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  background: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.fontColor};
  box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.fontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`

const EmailLink = styled.a`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.sigAngles};

  :hover {
    text-decoration: underline;
  }
`
