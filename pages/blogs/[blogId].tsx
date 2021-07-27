import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { fetchMyArticles, fetchOneArticle } from '../../data/networkRequests'
import { ParsedUrlQuery } from 'querystring'
import { ArticleModel } from '../../models/Article'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import MarkDown from '../../components/ui/MarkDown'

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
    revalidate: 1800,
  }
}

interface BlogShowPageProps {
  article: ArticleModel
}

const BlogShowPage: React.FC<BlogShowPageProps> = ({ article }) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { data } = useQuery(
    ['blog', `${article.id}`],
    () => fetchOneArticle(`${article.id}`),
    { initialData: article }
  )
  const { id, title, cover_image, url, description, body_markdown, body_html } =
    data

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{cover_image}</p>
      <p>{url}</p>
      <p>{description}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: body_html }}> */}
      <MarkDown>{body_markdown}</MarkDown>
      {/* </div> */}
    </div>
  )
}

export default BlogShowPage
