import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useAppSelector } from '../../../redux/hooks'
import { useEffect } from 'react'
interface SignatureProps {
  name: string
}

const Signature: React.FC<SignatureProps> = ({ name }) => {
  const theme = useAppSelector(({ theme }) => theme)

  return (
    <Link href='/' passHref>
      <SignatureContainer>
        <AngleBracket> &lt;</AngleBracket>
        <Name>{name}</Name>
        <AngleBracket>/&gt;</AngleBracket>
      </SignatureContainer>
    </Link>
  )
}

export default Signature

const SignatureContainer = styled.a`
  display: block;
  flex: none;
  float: left;
  font-size: 1.3em;
  text-decoration: none;
  margin-top: 10px;
  line-height: normal;
`

const AngleBracket = styled.span`
  color: ${({ theme }) => theme.sigAngles};
`
const Name = styled.span`
  font-family: 'Agustina Regular';
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
  color: ${({ theme }) => theme.sigColor};
`
