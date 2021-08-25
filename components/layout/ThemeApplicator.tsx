import { useState, useEffect, ReactNode } from 'react'
import { useBreakpoint } from '../../utils/useBreakpointProvider'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setIsDark } from '../../redux/themeSlice'
import Banner from '../ui/Header/Banner'
import Header from '../ui/Header/Header'
import Footer from '../ui/Footer'
import styled from 'styled-components'
import Image from 'next/image'

interface ThemeApplicator {
  children: ReactNode
}

const ThemeApplicator: React.FC<ThemeApplicator> = ({ children }) => {
  const breakpoints = useBreakpoint()
  const dispatch = useAppDispatch()
  const theme = useAppSelector(({ theme }) => theme.theme)
  const isDark = useAppSelector(({ theme }) => theme.isDark)
  // const [firstLoad, setFirstLoad] = useState<boolean>(true)
  // const [showBanner, setShowBanner] = useState<boolean>(false)

  // useEffect(() => {
  //   if (firstLoad) {
  //     dispatch(setIsDark(breakpoints.dark))
  //     setFirstLoad(false)
  //   } else if (isDark !== breakpoints.dark) {
  //     setShowBanner(true)
  //   }
  // }, [breakpoints.dark])

  // const handleUpdateTheme = () => {
  //   dispatch(setIsDark(breakpoints.dark))
  //   setShowBanner(false)
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* {showBanner && <Banner action={handleUpdateTheme} />} */}
        <Header />
        <BannerContainer>
          <BannerOverlay />
          <Image
            layout='fill'
            placeholder='blur'
            src={theme.banner}
            alt='Woodland Background'
            objectFit='cover'
          />
        </BannerContainer>
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default ThemeApplicator

const BannerContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  top: 0;
  margin: 0;
  padding: 0;
  left: 0;
  z-index: -3;
`
const BannerOverlay = styled.div`
  position: absolute;
  background: rgba(33, 29, 30, 0.45);
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  left: 0;
  z-index: 1;
`
