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

const LogoLink = styled.a`
  display: flex;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s;
  color: ${({ theme }) => theme.subtextColor};
  img {
    width: 80%;
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.highlightColor};
  }

  span {
    display: none;
  }
`
