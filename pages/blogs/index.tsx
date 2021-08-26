import { GetStaticProps } from 'next'
import React from 'react'
import Blogs from '../../components/ui/Blogs/Blogs'
import { fetchMyArticles } from '../../data/networkRequests'
import { ArticleModel } from '../../models/Article'

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchMyArticles()

  return {
    props: {
      articles,
    },
    revalidate: 60,
  }
}

interface BlogsIndexProps {
  articles: ArticleModel[]
}

const BlogsIndex: React.FC<BlogsIndexProps> = ({ articles }) => {
  return <Blogs articles={articles} />
}

export default BlogsIndex
