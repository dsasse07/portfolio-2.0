import Head from 'next/head'
import About from '../components/ui/Home/About'
import Blogs from '../components/ui/Home/Blogs/Blogs'
import Contact from '../components/ui/Home/Contact'
import {
  fetchGitHub,
  fetchMyArticles,
  fetchPortfolioProjects,
  PortfolioProjectsResponseModel,
} from '../data/networkRequests'
import { ArticleModel } from '../models/Article'
import { GetStaticProps } from 'next'
import GitHub from '../components/ui/Home/GitHub/GitHub'
import { GitHubResponseModel } from '../models/GitHub'
import styled from 'styled-components'
import { useAppDispatch } from '../redux/hooks'
import { setProjects } from '../redux/projectsSlice'
import { useEffect } from 'react'

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
    revalidate: 3600,
  }
}

interface HomeProps {
  articles: ArticleModel[]
  profileInfo: GitHubResponseModel
  projects: PortfolioProjectsResponseModel[]
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
        <GitHub profileInfo={profileInfo} />
        {/* <Projects projects={projects} /> */}
        <Blogs articles={articles} />
        <Contact />
      </Main>
    </>
  )
}

export default Home

const Main = styled.main`
  /* position: relative; */
  overflow-x: hidden;
  width: 100vw;
`
