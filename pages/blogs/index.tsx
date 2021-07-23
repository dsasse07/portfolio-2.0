import { GetStaticProps } from 'next'
import React from 'react'
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
  return (
    <div>
      <h2>All Blogs Listed Here</h2>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            {a.id} - {a.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogsIndex
