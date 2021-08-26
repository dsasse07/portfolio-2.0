import React from 'react'
import styled from 'styled-components'
import { GitHubResponseModel } from '../../../models/GitHub'
import GitHubGarden from './GitHubGarden'
import ProjectCard from './ProjectCard'
import SkillIcons from './SkillIcons'
import { useAppSelector } from '../../../redux/hooks'
import ActiveFilters from './ActiveFilters'
import LinkButton from '../LinkButton'

interface TechWorkProps {
  profileInfo: GitHubResponseModel
}

const TechWork: React.FC<TechWorkProps> = ({ profileInfo }) => {
  const { weeks } = profileInfo.contributionsCollection.contributionCalendar
  const { projects, filters } = useAppSelector(({ projects }) => projects)

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
    return <ProjectCard project={prj} key={prj.databaseId} />
  })

  return (
    <Container>
      <SectionHeader>
        <SectionTitle>Technical Work</SectionTitle>
      </SectionHeader>
      <Row>
        <SubSectionContainer>
          <SubSectionHeader>
            <SubSectionTitle>GitHub</SubSectionTitle>
          </SubSectionHeader>
          <GitHubGarden weeks={weeks} />
          <SubSectionHeader>
            <SkillsTitle>Skills</SkillsTitle>
          </SubSectionHeader>
          <SectionSubtitle>
            Click on the skills below to filter projects
          </SectionSubtitle>
          <ActiveFilters />
          <SkillIcons />
        </SubSectionContainer>

        <SubSectionContainer>
          <SubSectionHeader>
            <ProjectsTitle>Selected Projects</ProjectsTitle>
          </SubSectionHeader>
          <SectionSubtitle>Click a project to read more</SectionSubtitle>
          {projectComponents.slice(0, 4)}
          {projectComponents.length === 0 && (
            <NoMatchesText>
              No projects match the selected filters.
            </NoMatchesText>
          )}
          <LinkButton href='/projects' text='See More!' />
        </SubSectionContainer>
      </Row>
    </Container>
  )
}

export default TechWork

const Container = styled.section`
  background: ${({ theme }) => theme.translucentBackground};
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  min-height: 90vh;
  margin: 15vh 0;
  padding: 80px 0;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
`

const SectionHeader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
`
const SectionTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  width: 100%;
  margin: 10px;
`
const SubSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 10px;
  min-height: 700px;
`

const SubSectionHeader = styled(SectionHeader)`
  width: 100%;
`

const SubSectionTitle = styled.h3`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  flex: 1 0 0;
  margin: 20px 0;
`

const SkillsTitle = styled(SubSectionTitle)`
  margin-top: 70px;
`

const ProjectsTitle = styled(SubSectionTitle)``

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.subtextColor};
`

const NoMatchesText = styled.p`
  color: ${({ theme }) => theme.dangerTextColor};
`
