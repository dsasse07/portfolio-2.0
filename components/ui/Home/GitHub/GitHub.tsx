import React, { useState } from 'react'
import styled from 'styled-components'
import { GitHubResponseModel } from '../../../../models/GitHub'
import GitHubGarden from './GitHubGarden'
import ProjectCard from './ProjectCard2'
import Link from 'next/link'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import SkillIcons from './SkillIcons'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { clearSkillFilters } from '../../../../redux/projectsSlice'

interface GitHubProps {
  profileInfo: GitHubResponseModel
  // projects: PortfolioProjectsResponseModel[]
}

const GitHub: React.FC<GitHubProps> = ({ profileInfo }) => {
  const { weeks } = profileInfo.contributionsCollection.contributionCalendar
  const { projects, filters } = useAppSelector(({ projects }) => projects)
  const dispatch = useAppDispatch()

  const clearActiveSkillFilters = () => {
    dispatch(clearSkillFilters(true))
  }

  const selectedProjects = projects.filter((prj) => {
    const topics = new Set(
      prj.repositoryTopics.nodes.map((topic) => topic.topic.name)
    )
    for (const filter of Object.keys(filters)) {
      if (!topics.has(filter)) return false
    }
    return true
  })

  const projectComponents = selectedProjects.map((prj) => {
    return (
      <Link href={`/projects/${prj.route}`} key={prj.databaseId}>
        <ProjectCard project={prj} />
      </Link>
    )
  })

  return (
    <Container>
      <SubSectionContainer>
        <SectionHeader>
          <SectionTitle>GitHub Section</SectionTitle>
        </SectionHeader>
        <GitHubGarden weeks={weeks} />
        <SectionHeader>
          <SectionTitle>Skills</SectionTitle>
        </SectionHeader>
        <SectionSubtitle>
          Click on the skills below to filter projects
        </SectionSubtitle>
        {Object.values(filters)?.includes(true) && (
          <button type='button' onClick={clearActiveSkillFilters}>
            Clear
          </button>
        )}
        <SkillIcons />
      </SubSectionContainer>
      <SubSectionContainer>
        <SectionHeader>
          <ProjectTitle>Selected Projects</ProjectTitle>
          <Link href='/projects' passHref>
            <LinkText>
              See All
              <OpenInNewIcon />
            </LinkText>
          </Link>
        </SectionHeader>
        {projectComponents.slice(0, 4)}
      </SubSectionContainer>
    </Container>
  )
}

export default GitHub

const Container = styled.section`
  /* background: ${({ theme }) => theme.sectionBackground}; */
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`

const SubSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 10px;
`

const SectionHeader = styled.header`
  position: relative;
  padding-left: 10px;
  width: 90%;
  display: flex;
`

const SectionTitle = styled.h3`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  flex: 1 0 0;
`
const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.subtextColor};
`

const ProjectTitle = styled(SectionTitle)`
  margin-left: 100px;
`

const LinkText = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.sigAngles};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: initial;
  :hover {
    color: ${({ theme }) => theme.sigAngles};
  }
  svg {
    padding-left: 6px;
    font-size: 1rem;
  }
`
