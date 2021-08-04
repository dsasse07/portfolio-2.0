import React from 'react'
import styled from 'styled-components'
import { PortfolioProjectsResponseModel } from '../../../../data/networkRequests'
import { icons } from '../../../../assets/icons/icons'
import Tooltip from '../../Tooltip'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { toggleSkillFilter } from '../../../../redux/projectsSlice'

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
          <IconShell onClick={() => handleToggleSkill(skill.matchText)}>
            <IconContainer selected={filters[skill.matchText]}>
              <Image src={skill.icon} alt={skill.text} placeholder='blur' />
            </IconContainer>
          </IconShell>
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
  /* border: 2px solid blue; */
  width: 90%;
`

const IconShell = styled.div`
  width: 6vw;
  height: 6vw;
`
interface IconContainerStyleProps {
  selected: boolean
}
const IconContainer = styled.div<IconContainerStyleProps>`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  width: 3vw;
  max-width: 100px;
  height: 3vw;
  max-height: 100px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 50%;
  background: #403130;
  cursor: pointer;
  box-shadow: ${({ selected, theme }) => selected && theme.shadow};

  :hover {
    box-shadow: ${({ theme }) => theme.yellowShadow};
  }
`
