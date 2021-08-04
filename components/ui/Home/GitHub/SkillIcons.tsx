import React from 'react'
import styled, { keyframes } from 'styled-components'
import { PortfolioProjectsResponseModel } from '../../../../data/networkRequests'
import { icons } from '../../../../assets/icons/icons'
import Tooltip from '../../Tooltip'
import Image from 'next/image'
import { useAppSelector } from '../../../../redux/hooks'

interface SkillIconsProps {
  projects: PortfolioProjectsResponseModel[]
}
// const SkillIcons: React.FC<SkillIconsProps> = ({ projects }) => {
const SkillIcons = () => {
  const { skills } = useAppSelector(({ projects }) => projects)
  console.log(skills)
  const skillIcons = Object.values(icons).map((skill) => {
    return (
      <Tooltip content={skill.text} fontSize={'1rem'} key={skill.text}>
        <IconShell>
          <IconContainer>
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

const IconContainer = styled.div`
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
  :hover {
    box-shadow: ${({ theme }) => theme.yellowShadow};
  }
`
