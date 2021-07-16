import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface SignatureProps {
  name: string
}

const Signature: React.FC<SignatureProps> = ({ name }) => {
  return (
    <SignatureContainer href='/' className='logo'>
      <AngleBracket className='grey-color'> &lt;</AngleBracket>
      <Name className='logo-name'>{name}</Name>
      <AngleBracket className='grey-color'>/&gt;</AngleBracket>
    </SignatureContainer>
  )
}

export default Signature

const SignatureContainer = styled.a`
  display: block;
  flex: none;
  float: left;
  font-size: 1.5em;
  text-decoration: none;
  margin-top: 10px;
  line-height: normal;
`

const AngleBracket = styled.span`
  color: ${(props) => props.theme.logoAngles};
`
const Name = styled.span`
  font-family: 'Agustina Regular';
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
  color: ${(props) => props.theme.logoName};
`
