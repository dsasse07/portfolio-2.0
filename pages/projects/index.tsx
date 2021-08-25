import { GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import GitHubGarden from '../../components/ui/Home/TechWork/GitHubGarden'
import {
  fetchGitHub,
  fetchPortfolioProjects,
  PortfolioProjectsResponseModel,
} from '../../data/networkRequests'
import { GitHubResponseModel } from '../../models/GitHub'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setProjects } from '../../redux/projectsSlice'
import styled from 'styled-components'
import ActiveFilters from '../../components/ui/Home/TechWork/ActiveFilters'
import SkillIcons from '../../components/ui/Home/TechWork/SkillIcons'
import SqProjectCard from '../../components/ui/Home/TechWork/SqProjectCard'

export const getStaticProps: GetStaticProps = async (context) => {
  const { user } = await fetchGitHub()
  const projectsData: PortfolioProjectsResponseModel[] =
    await fetchPortfolioProjects()

  return {
    props: {
      profileInfo: user,
      projectsData: projectsData,
    },
    revalidate: 1800,
  }
}

interface ProjectsIndexProps {
  profileInfo: GitHubResponseModel
  projectsData: PortfolioProjectsResponseModel[]
}

const ProjectsIndex: React.FC<ProjectsIndexProps> = ({
  profileInfo,
  projectsData,
}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setProjects(projectsData))
  }, [projectsData])

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
    return <SqProjectCard key={prj.databaseId} project={prj} />
  })

  const { weeks } = profileInfo.contributionsCollection.contributionCalendar

  return (
    <Container>
      <SectionHeader>
        <SectionTitle>Technical Work</SectionTitle>
      </SectionHeader>

      <GitHubGarden weeks={weeks} />

      <SubSectionContainer>
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
        {projectComponents.length ? (
          <ProjectsSubSection>{projectComponents}</ProjectsSubSection>
        ) : (
          <ProjectsSubSection>
            <NoMatchesText>
              No projects match the selected filters.
            </NoMatchesText>
          </ProjectsSubSection>
        )}
      </SubSectionContainer>
    </Container>
  )
}

export default ProjectsIndex

const Container = styled.section`
  position: relative;
  background: rgba(30, 29, 30, 0.75);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  min-height: 90vh;
  margin: 10vh 0;
  padding: 80px 0;
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
`

const ProjectsSubSection = styled(SubSectionContainer)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const SubSectionHeader = styled(SectionHeader)`
  width: 90%;
`

const SubSectionTitle = styled.h3`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  flex: 1 0 0;
  margin: 20px 0;
`

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.subtextColor};
`

const SkillsTitle = styled(SubSectionTitle)`
  margin-top: 70px;
`

const ProjectsTitle = styled(SubSectionTitle)``

const NoMatchesText = styled.p`
  color: ${({ theme }) => theme.dangerTextColor};
`
