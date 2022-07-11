import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/globalStyle'
import { useAppSelector } from '../../redux/hooks'
import Header from '../ui/Header/Header'
import Footer from '../ui/Footer'
import styled from 'styled-components'
import Image from 'next/image'

interface ThemeApplicator {
  children: ReactNode
}

const ThemeApplicator: React.FC<ThemeApplicator> = ({ children }) => {
  const theme = useAppSelector(({ theme }) => theme.theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <BannerContainer>
          <BannerOverlay />
          <Image
            layout='fill'
            // placeholder='blur'
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
