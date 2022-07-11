import React from 'react'
import styled from 'styled-components'
import { icons } from '../../../public/assets/icons/icons'
import Tooltip from '../Tooltip'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { toggleSkillFilter } from '../../../redux/projectsSlice'
import { removeFocus } from '../../../utils/removeFocus'

interface SkillIconsProps {}
const SkillIcons: React.FC<SkillIconsProps> = () => {
  const { skills, filters } = useAppSelector(({ projects }) => projects)
  const dispatch = useAppDispatch()

  const handleToggleSkill = (skill: string) => {
    dispatch(toggleSkillFilter(skill))
  }

  const skillIcons = Object.values(icons)
    .filter((skill) => skills.includes(skill.matchText))
    .map((skill) => {
      return (
        <Tooltip content={skill.text} fontSize={'1rem'} key={skill.text}>
          <IconContainer
            selected={filters[skill.matchText]}
            onClick={(e) => {
              handleToggleSkill(skill.matchText)
              removeFocus(e.target)
            }}
          >
            <Image src={skill.icon} alt={skill.text} placeholder='blur' />
          </IconContainer>
        </Tooltip>
      )
    })
  return <Container>{skillIcons}</Container>
}

export default SkillIcons

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
`

interface IconContainerStyleProps {
  selected: boolean
}
const IconContainer = styled.button<IconContainerStyleProps>`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 5px;
  width: 4vw;
  min-width: 50px;
  max-width: 100px;
  height: 4vw;
  min-height: 50px;
  max-height: 100px;
  padding: 10px;
  border: 1px solid
    ${({ selected, theme }) => (selected ? theme.activeColor : theme.fontColor)};
  border-radius: 50%;
  background: #403130;
  cursor: pointer;
  box-shadow: ${({ selected, theme }) =>
    selected && theme.shadow + ' ' + theme.activeColor};
  outline: none;

  :hover,
  :focus {
    box-shadow: ${({ selected, theme }) =>
      selected
        ? theme.shadow + ' ' + theme.dangerTextColor
        : theme.shadow + ' ' + theme.highlightColor};
    border: 1px solid
      ${({ selected, theme }) =>
        selected ? theme.dangerTextColor : theme.highlightColor};
  }
`
