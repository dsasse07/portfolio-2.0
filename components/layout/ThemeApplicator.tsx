import { useState, useEffect, ReactNode } from 'react'
import { useBreakpoint } from '../../utils/BreakpointProvider'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setIsDark } from '../../redux/themeSlice'
import Banner from '../ui/Banner'

interface ThemeApplicator {
  children: ReactNode
}

const ThemeApplicator: React.FC<ThemeApplicator> = ({ children }) => {
  const breakpoints = useBreakpoint()
  const dispatch = useAppDispatch()
  const theme = useAppSelector(({ theme }) => theme.theme)
  const isDark = useAppSelector(({ theme }) => theme.isDark)
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [showBanner, setShowBanner] = useState<boolean>(false)

  useEffect(() => {
    if (firstLoad) {
      dispatch(setIsDark(breakpoints.dark))
      setFirstLoad(false)
    } else if (isDark !== breakpoints.dark) {
      setShowBanner(true)
    }
  }, [breakpoints.dark])

  const handleUpdateTheme = () => {
    dispatch(setIsDark(breakpoints.dark))
    setShowBanner(false)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {showBanner && <Banner action={handleUpdateTheme} />}
        {children}
      </ThemeProvider>
    </>
  )
}

export default ThemeApplicator
