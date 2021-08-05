import styled from 'styled-components'
import { ArticleModel } from '../../../../models/Article'
import BlogCard from './BlogCard2'
import Link from 'next/link'
import LinkButton from '../../LinkButton'

interface BlogProps {
  articles: ArticleModel[]
}

const Blogs: React.FC<BlogProps> = ({ articles }) => {
  const blogCards = articles.map((article, index) => {
    return (
      <Link href={`/blogs/${article.id}`} passHref key={article.id}>
        <BlogCard article={article} />
      </Link>
    )
  })

  return (
    <Container id='blogs'>
      <SectionHeader>
        <SectionTitle>Tech Writing</SectionTitle>
        <SectionSubtitle>
          A selection of my most recent technical blog posts. Click to read or
          scroll for more
        </SectionSubtitle>
      </SectionHeader>
      <SubSectionContainer>{blogCards.slice(0, 5)}</SubSectionContainer>
      <SectionFooter>
        <LinkButton href='/blogs' text='See More!' />
      </SectionFooter>
    </Container>
  )
}

export default Blogs

const Container = styled.section`
  /* background: ${({ theme }) => theme.background}; */
  background: rgba(30, 29, 30, 0.9);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 70vh;
  margin: 20vh 0;
  padding: 20vh 0;

  .flex-item {
    margin: 1rem;
  }
`
const SectionHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
`

const SectionFooter = styled(SectionHeader)``

const SectionTitle = styled.h2`
  font-size: 4rem;
  width: 100%;
  margin: 0;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.subtextColor};
`
