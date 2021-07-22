import Head from 'next/head'
import About from '../components/ui/Home/About'
import Projects from '../components/ui/Home/Projects/Projects'

const Home: React.FC = () => {
  return (
    <div>
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
        <Projects />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
