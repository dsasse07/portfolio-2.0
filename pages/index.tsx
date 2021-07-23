import Head from 'next/head'
import About from '../components/ui/Home/About'
import Blogs from '../components/ui/Home/Blogs/Blogs'
import Projects from '../components/ui/Home/Projects/Projects'
import Contact from '../components/ui/Home/Contact'
import { fetchGitHub, fetchMyArticles } from '../data/networkRequests'
import { ArticleModel } from '../models/Article'
import { GetStaticProps } from 'next'
import GitHub from '../components/ui/Home/GitHub/GitHub'
import { GitHubResponseModel } from '../models/GitHub'

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchMyArticles()
  const { user } = await fetchGitHub()

  return {
    props: {
      articles,
      profileInfo: user,
    },
    revalidate: 3600,
  }
}

interface HomeProps {
  articles: ArticleModel[]
  profileInfo: GitHubResponseModel
}

const Home: React.FC<HomeProps> = ({ articles, profileInfo }) => {
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
      <main>
        <About />
        <GitHub profileInfo={profileInfo} />
        <Projects />
        <Blogs articles={articles} />
        <Contact />
      </main>
    </>
  )
}

export default Home
