import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { fetchMyArticles, fetchOneArticle } from '../../data/networkRequests'
import { ParsedUrlQuery } from 'querystring'
import { ArticleModel } from '../../models/Article'

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
  const articleData: ArticleModel = await fetchOneArticle(blogId)

  return {
    props: {
      article: articleData,
    },
    revalidate: 10,
  }
}

interface BlogShowPageProps {
  article: ArticleModel
}

const BlogShowPage: React.FC<BlogShowPageProps> = ({ article }) => {
  const { id, title, cover_image, url, description } = article
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{cover_image}</p>
      <p>{url}</p>
      <p>{description}</p>
    </div>
  )
}

export default BlogShowPage
