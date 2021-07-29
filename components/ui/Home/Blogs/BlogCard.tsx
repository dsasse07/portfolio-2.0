import styled from 'styled-components'
import { useState } from 'react'
import devIcon from '../../../../assets/devIcon.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Image from 'next/image'
import { ArticleModel } from '../../../../models/Article'
import { createPlaceholder } from '../../../../utils/createPlaceholder'

interface BlogCardProps {
  article: ArticleModel
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const { title, published_timestamp, url, cover_image } = article
  const [showLink, setShowLink] = useState<boolean>(false)
  let timer: NodeJS.Timeout

  const handleShowLink = () => {
    timer = setTimeout(() => {
      setShowLink(true)
    }, 200)
  }
  const handleHideLink = () => {
    setShowLink(false)
    clearTimeout(timer)
  }

  return (
    <Card
      className='flex-item'
      onMouseEnter={handleShowLink}
      onMouseLeave={handleHideLink}
    >
      <LinkButton className='link' href={url} target='_blank' rel='noreferrer'>
        <DevLogoContainer className='devIcon'>
          <Image src={devIcon} alt='Dev.to logo' />
        </DevLogoContainer>
        <IconContainer showLink={showLink}>
          <ArrowIcon />
        </IconContainer>
      </LinkButton>
      <Row>
        <LogoContainer>
          <Logo
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${createPlaceholder(
              500,
              200
            )}`}
            width={500}
            height={200}
            src={cover_image}
            alt={`${title}`}
          />
        </LogoContainer>
      </Row>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row>
        <PubDate>{published_timestamp}</PubDate>
      </Row>
    </Card>
  )
}

export default BlogCard

const Card = styled.article`
  position: relative;
  background: ${(props) => props.theme.itemBackground};
  width: 100%;
  max-width: 500px;
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
  overflow: hidden;

  :hover .link {
    width: 100px;
    height: 75px;

    .devIcon {
      right: 30px;
      top: 0px;
    }
    div {
      top: 21px;
    }
  }
`
const DevLogoContainer = styled.div``

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Logo = styled(Image)`
  width: 100%;
  object-fit: contain;
  border: 1px solid black;
`
const Title = styled.header`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-top: 6px;
  padding: 0;
  margin-bottom: 0.4rem;
`

const PubDate = styled.span`
  font-size: 0.8rem;
`

const LinkButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 50px;
  height: 40px;
  text-decoration: none;
  background: black;
  border-radius: 0 0 0 80px;
  padding: 5px;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 1;

  .devIcon {
    position: absolute;
    width: 35px;
    top: 6px;
    right: 8px;
    transition: 0.2s;
  }
`
interface IconContainerStyleProps {
  showLink: boolean
}

const IconContainer = styled.div<IconContainerStyleProps>`
  transition: 0.2s;
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: ${({ showLink }) => (showLink ? '100%' : '0')};
`

const ArrowIcon = styled(ArrowForwardIcon)`
  color: white;
`
