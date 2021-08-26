import Head from 'next/head'
import About from '../components/ui/About'
import Blogs from '../components/ui/Blogs/Blogs'
import Contact from '../components/ui/Contact'
import {
  fetchGitHub,
  fetchMyArticles,
  fetchPortfolioProjects,
} from '../data/networkRequests'
import { ArticleModel } from '../models/Article'
import { GetStaticProps } from 'next'
import TechWork from '../components/ui/TechWork/TechWork'
import { GitHubResponseModel } from '../models/GitHub'
import styled from 'styled-components'
import { useAppDispatch } from '../redux/hooks'
import { setProjects } from '../redux/projectsSlice'
import { useEffect } from 'react'
import { PortfolioProjectsResponseModel } from '../models/Project'

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchMyArticles()
  const { user } = await fetchGitHub()
  const projectsData: PortfolioProjectsResponseModel[] =
    await fetchPortfolioProjects()

  return {
    props: {
      articles,
      profileInfo: user,
      projects: projectsData,
    },
    revalidate: 60,
  }
}

interface HomeProps {
  profileInfo: GitHubResponseModel
  projects: PortfolioProjectsResponseModel[]
  articles: ArticleModel[]
}

const Home: React.FC<HomeProps> = ({ articles, profileInfo, projects }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setProjects(projects))
  }, [projects])

  return (
    <>
      <Head>
        <title>Danny Sassé | Software Engineer</title>
        <meta name='description' content='Software Engineering Portfolio' />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, React, Ruby, Ruby on Rails, Daniel Sasse, Danny Sasse, Software Engineer'
        />
        <meta name='author' content='Danny Sasse' />
        {/*<!-- Twitter Card -->*/}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:image' content='https://i.imgur.com/ELfCxI1.jpg' />
        <meta name='twitter:image:alt' content='profile picture' />
        <meta
          property='twitter:title'
          content='Danny Sasse | Software Engineer'
        />
        <meta
          property='twitter:description'
          content='Software Engineering Portfolio'
        />
        <meta property='twitter:site' content='@dannysasse' />
        {/* Facebook preview */}
        <meta property='og:image' content='https://i.imgur.com/ELfCxI1.jpg' />
        <meta property='og:title' content='Danny Sasse | Software Engineer' />
        <meta
          property='og:description'
          content='Software Engineering Portfolio'
        />
        <meta property='og:url' content='https://dannysasse.netlify.app/' />
        <meta property='og:type' content='website' />
      </Head>

      <Main>
        <About />
        <TechWork profileInfo={profileInfo} />
        <Blogs articles={articles} limit={5} />
        <Contact />
      </Main>
    </>
  )
}

export default Home

const Main = styled.main`
  overflow-x: hidden;
  /* width: 95vw; */
`
