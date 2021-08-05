import styled from 'styled-components'
import { forwardRef, useState } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Image from 'next/image'
import { ArticleModel } from '../../../../models/Article'
import { createPlaceholder } from '../../../../utils/createPlaceholder'

interface BlogCardProps {
  article: ArticleModel
  href?: string
  onClick?: () => void
}

const BlogCard = forwardRef<HTMLElement, BlogCardProps>(
  ({ article, onClick, href }, ref) => {
    const { title, published_timestamp, cover_image } = article

    return (
      //@ts-ignore
      <Card href={href} ref={ref} onClick={onClick} className='flex-item'>
        <LogoContainer>
          <Image
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
        <TextLayer>
          <Title>{title}</Title>
          <PubDate>
            {new Date(published_timestamp).toLocaleDateString()}
          </PubDate>
        </TextLayer>
      </Card>
    )
  }
)

export default BlogCard

const Card = styled.article`
  position: relative;
  display: flex;
  height: 150px;
  width: 100%;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.fontColor};
  overflow: hidden;
  cursor: pointer;
  :hover {
    box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.sigAngles};
    border: 1px solid ${({ theme }) => theme.sigAngles};
  }
`

const TextLayer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  background: ${({ theme }) =>
    'radial-gradient(circle, rgba(30,29,30,0.8) 0%, rgba(30,29,30, 0.5) 100% )'};
  z-index: 0;

  :hover {
    background: ${({ theme }) =>
      'radial-gradient(circle, rgba(64,193,21,0.9) 0%, rgba(64,193,21, 0.7) 100% )'};
    color: ${({ theme }) => theme.darkFontColor};
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  object-fit: contain;
  position: absolute;
  z-index: 0;
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
  z-index: 1;
`

const PubDate = styled.span`
  font-size: 0.9rem;
`
