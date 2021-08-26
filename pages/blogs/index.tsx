import { GetStaticProps } from 'next'
import React from 'react'
import Blogs from '../../components/ui/Home/Blogs/Blogs'
import { fetchMyArticles } from '../../data/networkRequests'
import { ArticleModel } from '../../models/Article'

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchMyArticles()

  return {
    props: {
      articles,
    },
    revalidate: 3600,
  }
}

interface BlogsIndexProps {
  articles: ArticleModel[]
}

const BlogsIndex: React.FC<BlogsIndexProps> = ({ articles }) => {
  return <Blogs articles={articles} />
}

export default BlogsIndex
