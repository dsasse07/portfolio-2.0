import styled from 'styled-components'

interface SocialLinkProps {
  social: {
    ariaLabel: string
    background: string
    href: string
    icon: JSX.Element
    labelText: string
  }
}

const SocialLink: React.FC<SocialLinkProps> = ({ social }) => {
  const { ariaLabel, background, href, icon, labelText } = social

  return (
    <LogoLink
      aria-label={ariaLabel}
      background={background}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {icon}
      <span>{labelText}</span>
    </LogoLink>
  )
}

export default SocialLink

interface LogoLinkStyleProps {
  background: string
}
const LogoLink = styled.a<LogoLinkStyleProps>`
  display: flex;
  border-radius: 50%;
  background: ${({ background }) => background};
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: ${(props) => props.theme.shadow};

  img {
    width: 80%;
  }

  :hover {
    transform: scale(1.2);
  }

  span {
    display: none;
  }
`
