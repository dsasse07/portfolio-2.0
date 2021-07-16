import { useState, useEffect, ReactNode } from 'react'
import { useBreakpoint } from '../../utils/BreakpointProvider'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/themes'
import GlobalStyle from '../../styles/globalStyle'

interface ThemeApplicator {
  children: ReactNode
}

const ThemeApplicator: React.FC<ThemeApplicator> = ({ children }) => {
  const breakpoints = useBreakpoint()

  const [theme, setTheme] = useState<DefaultTheme>(
    breakpoints.dark ? darkTheme : lightTheme
  )

  useEffect(() => {
    setTheme(breakpoints.dark === true ? darkTheme : lightTheme)
  }, [breakpoints.dark])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  )
}

export default ThemeApplicator
