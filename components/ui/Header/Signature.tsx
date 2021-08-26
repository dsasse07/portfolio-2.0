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
      <SignatureContainer tabIndex={0}>
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
  position: relative;
  /* flex: none; */
  /* float: left; */
  font-size: 1.3em;
  text-decoration: none;
  margin-top: 6px;
  line-height: normal;
  outline: none;
  overflow: hidden;

  ::after {
    content: '';
    display: block;
    position: absolute;
    transition: 0.3s;
    transition-delay: height 0.2s;
    width: 140px;
    height: 10px;
    opacity: 0;
    top: 38px;
    left: 60px;
    border-top: 2px solid ${({ theme }) => theme.highlightColor};
  }

  :hover,
  :focus {
    ::after {
      width: 140px;
      height: 10px;
      opacity: 1;
      border-top: 2px solid ${({ theme }) => theme.highlightColor};
      /* border-radius: 50%; */
    }
  }
`

const AngleBracket = styled.span`
  color: ${({ theme }) => theme.activeColor};
`
const Name = styled.span`
  font-family: 'Agustina Regular';
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
  color: ${({ theme }) => theme.fontColor};
`
