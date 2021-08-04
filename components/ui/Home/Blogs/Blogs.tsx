import styled from 'styled-components'
import { ArticleModel } from '../../../../models/Article'
import BlogCard from './BlogCard'
import Link from 'next/link'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

interface BlogProps {
  articles: ArticleModel[]
}

const Blogs: React.FC<BlogProps> = ({ articles }) => {
  const blogCards = articles.map((article, index) => {
    return <BlogCard key={index} article={article} />
  })

  return (
    <Container id='blogs'>
      <SectionHeader>
        <SectionTitle>Tech Writing</SectionTitle>
        <Link href='/projects' passHref>
          <LinkText>
            See More
            <OpenInNewIcon />
          </LinkText>
        </Link>
      </SectionHeader>
      <SubSectionContainer>{blogCards}</SubSectionContainer>
    </Container>
  )
}

export default Blogs

const Container = styled.section`
  /* background: rgba(100, 100, 100, 0.22); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 70vh;
  margin: 10vh 0;

  .flex-item {
    margin: 1rem;
  }
`
const SectionHeader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
`

const SectionTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  width: 100%;
  margin: 0;
`

const SubSectionContainer = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`

const SubSectionHeader = styled(SectionHeader)`
  width: 90%;
`

const SubSectionTitle = styled.h3`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  flex: 1 0 0;
  margin: 20px 0;
`

const LinkText = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.sigAngles};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: ${({ theme }) => theme.hoverHighlightColor};
  }
  svg {
    font-size: 1rem;
  }
`
