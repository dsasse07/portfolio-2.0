import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { fetchMyArticles, fetchOneArticle } from '../../data/networkRequests'
import { ParsedUrlQuery } from 'querystring'
import { ArticleModel } from '../../models/Article'
import MarkDown from '../../components/ui/MarkDown'
import styled from 'styled-components'
import Image from 'next/image'
import { createPlaceholder } from '../../utils/createPlaceholder'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesData: ArticleModel[] = await fetchMyArticles()
  const ids = articlesData.map((article) => {
    return { params: { blogId: article.id.toString() } }
  })
  return {
    fallback: 'blocking',
    paths: ids,
  }
}

interface StaticPropsParams extends ParsedUrlQuery {
  blogId: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { blogId } = context.params as StaticPropsParams
  const article: ArticleModel = await fetchOneArticle(blogId)
  return {
    props: {
      article,
    },
    revalidate: 60,
  }
}

interface BlogShowPageProps {
  article: ArticleModel
}

const BlogShowPage: React.FC<BlogShowPageProps> = ({ article }) => {
  const {
    title,
    cover_image,
    url,
    published_timestamp,
    body_markdown,
    reading_time_minutes,
    tags,
  } = article

  const tagComponents = tags.map((tag) => {
    return <Tag key={tag}>{tag}</Tag>
  })

  return (
    <Container>
      <Image
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${createPlaceholder(500, 200)}`}
        width={500}
        height={200}
        src={cover_image}
        alt={title + ' cover image'}
      />
      <Title>{title}</Title>
      <Tags>{tagComponents}</Tags>
      <p>
        {`Published: ${new Date(published_timestamp).toDateString()} `}
        <ReadTime>{`(~ ${reading_time_minutes} min)`}</ReadTime>
      </p>
      <ExternalLink href={url} target='_blank' rel='noreferrer'>
        Read on Dev.to
        {<ArrowForwardIcon />}
      </ExternalLink>
      <MarkDown>{body_markdown}</MarkDown>
    </Container>
  )
}

export default BlogShowPage

const Container = styled.section`
  background: ${({ theme }) => theme.translucentBackground};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  margin: 20px 0;
  padding: 50px 6vw;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
`

const Tag = styled.p`
  border-bottom: 2px solid ${({ theme }) => theme.highlightColor};
  padding: 5px;
  margin: 0 5px;
  font-size: 1.2rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`

const ExternalLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.activeColor};
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  :hover {
    text-decoration: underline;
  }
`

const ReadTime = styled.span`
  color: ${({ theme }) => theme.highlightColor};
`
