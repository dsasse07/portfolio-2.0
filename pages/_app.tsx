import type { AppProps } from 'next/app'
import '../styles/fonts.css'
import { BreakpointProvider, queries } from '../utils/useBreakpointProvider'
import ThemeApplicator from '../components/layout/ThemeApplicator'
import { printConsoleWelcome } from '../utils/consoleMsg'
// import Head from 'next/head'
import { store } from '../redux/store'
import { Provider as ReduxProvider } from 'react-redux'
// import { QueryClient, QueryClientProvider } from 'react-query'
// import { Hydrate } from 'react-query/hydration'
import { useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  printConsoleWelcome()
  // const [queryClient, _] = useState(() => new QueryClient())

  return (
    <BreakpointProvider queries={queries}>
      <ReduxProvider store={store}>
        {/* <QueryClientProvider client={queryClient}> */}
        <ThemeApplicator>
          {/* <Hydrate state={pageProps.dehydratedState}> */}
          <Component {...pageProps} />
          {/* </Hydrate> */}
        </ThemeApplicator>
        {/* </QueryClientProvider> */}
      </ReduxProvider>
    </BreakpointProvider>
  )
}
export default MyApp
