// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BreakpointProvider } from '../utils/BreakpointProvider'
import ThemeApplicator from '../components/layout/ThemeApplicator'

const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  dark: '(prefers-color-scheme: dark)',
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <BreakpointProvider queries={queries}>
      <ThemeApplicator>
        <Component {...pageProps} />
      </ThemeApplicator>
    </BreakpointProvider>
  )
}
export default MyApp
