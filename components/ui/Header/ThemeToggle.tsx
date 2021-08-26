import styled from 'styled-components'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import { useAppDispatch } from '../../../redux/hooks'
import { toggleTheme } from '../../../redux/themeSlice'

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }
  return (
    <OuterContainer aria-label='Dark Mode Toggle' onClick={handleToggleTheme}>
      <WbSunnyIcon />
      <NightsStayIcon />
      <Slider />
    </OuterContainer>
  )
}

export default ThemeToggle

const OuterContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid ${(props) => props.theme.togglerColor}; */
  border: 2px solid blue;
  border-radius: 20px;
  background: none;
  padding: 2px;
  padding-left: 3px;
  padding-right: 2px;
  cursor: pointer;

  svg {
    height: 25px;
    width: 25px;
    color: ${(props) => props.theme.fontColor};

    :first-of-type {
      margin-right: 4px;
    }
  }
`

const Slider = styled.div`
  position: absolute;
  top: 2px;
  left: ${(props) => props.theme.sliderLeft};
  background: ${(props) => props.theme.togglerColor};
  height: 24px;
  width: 24px;
  border-radius: 50%;
  transition: 0.3s;
`
