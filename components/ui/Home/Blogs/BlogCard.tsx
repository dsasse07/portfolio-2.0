import styled from 'styled-components'
import { forwardRef } from 'react'
import Image from 'next/image'
import { ArticleModel } from '../../../../models/Article'
import { createPlaceholder } from '../../../../utils/createPlaceholder'
import Link from 'next/link'

interface BlogCardProps {
  article: ArticleModel
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const { title, published_timestamp, id, cover_image } = article

  return (
    //@ts-ignore
    <Link href={`/blogs/${id}`} passHref>
      <Card className='flex-item' tabIndex={0}>
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
        <TextLayer id='textLayer'>
          <Title>{title}</Title>
          <PubDate>
            {new Date(published_timestamp).toLocaleDateString()}
          </PubDate>
        </TextLayer>
      </Card>
    </Link>
  )
}

export default BlogCard

const Card = styled.a`
  position: relative;
  height: 150px;
  width: 100%;
  max-width: 500px;
  box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.fontColor};
  border: 1px solid ${({ theme }) => theme.fontColor};
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadow + ' ' + theme.sigAngles};
    border: 1px solid ${({ theme }) => theme.sigAngles};

    #textLayer {
      background: ${({ theme }) =>
        'radial-gradient(circle, rgba(32,96,11,0.9) 0%, rgba(32,96,11, 0.7) 100% )'};
    }
  }
`

const TextLayer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.4s;
  color: ${({ theme }) => theme.fontColor};

  background: ${({ theme }) =>
    'radial-gradient(circle, rgba(30,29,30,0.8) 0%, rgba(30,29,30, 0.5) 100% )'};
  z-index: 0;

  :hover {
    background: ${({ theme }) =>
      'radial-gradient(circle, rgba(32,96,11,0.9) 0%, rgba(32,96,11, 0.7) 100% )'};
    /* color: ${({ theme }) => theme.darkFontColor}; */
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
