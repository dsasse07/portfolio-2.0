import type { AppProps } from 'next/app'
import { BreakpointProvider } from '../utils/BreakpointProvider'
import ThemeApplicator from '../components/layout/ThemeApplicator'
import { printConsoleWelcome } from '../utils/consoleMsg'
import Head from 'next/head'

const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  dark: '(prefers-color-scheme: dark)',
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  printConsoleWelcome()

  return (
    <BreakpointProvider queries={queries}>
      <ThemeApplicator>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='manifest' href='/manifest.json' />
          {/* Signature Font */}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Component {...pageProps} />
      </ThemeApplicator>
    </BreakpointProvider>
  )
}
export default MyApp
