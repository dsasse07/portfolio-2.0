import styled from 'styled-components'
import { ArticleModel } from '../../../../models/Article'
import BlogCard from './BlogCard'

interface BlogProps {
  articles: ArticleModel[]
}

const Blogs: React.FC<BlogProps> = ({ articles }) => {
  const blogCards = articles.map((article, index) => {
    return <BlogCard key={index} article={article} />
  })

  return (
    <Container id='blogs'>
      <Heading>
        <SectionHeading>Tech Writing</SectionHeading>
        <Description>
          With a love of developing, comes a love for sharing what I've learned
          with others.
        </Description>
      </Heading>
      {blogCards}
    </Container>
  )
}

export default Blogs

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;

  .flex-item {
    margin: 1rem;
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;

  h2,
  h4 {
    margin: 0.5rem;
  }
`

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0;
`

const Description = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: normal;
`
