import React from 'react'
import styled from 'styled-components'
import { GitHubResponseModel } from '../../../../models/GitHub'
import GitHubGarden from './GitHubGarden'
import ProjectCard from './ProjectCard2'
import Link from 'next/link'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import SkillIcons from './SkillIcons'
import { useAppSelector } from '../../../../redux/hooks'
import ActiveFilters from './ActiveFilters'

interface GitHubProps {
  profileInfo: GitHubResponseModel
}

const GitHub: React.FC<GitHubProps> = ({ profileInfo }) => {
  const { weeks } = profileInfo.contributionsCollection.contributionCalendar
  const { projects, filters } = useAppSelector(({ projects }) => projects)
  // const dispatch = useAppDispatch()

  // const clearActiveSkillFilters = () => {
  //   dispatch(clearSkillFilters(true))
  // }

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
      <SectionHeader>
        <SectionTitle>My Work</SectionTitle>
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
            <Link href='/projects' passHref>
              <LinkText>
                See More
                <OpenInNewIcon />
              </LinkText>
            </Link>
          </SubSectionHeader>
          <SectionSubtitle>Click a project to read more</SectionSubtitle>
          {projectComponents.slice(0, 4)}
        </SubSectionContainer>
      </Row>
    </Container>
  )
}

export default GitHub

const Container = styled.section`
  /* background: ${({ theme }) => theme.sectionBackground}; */
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  min-height: 90vh;
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
  margin: 0;
`
const SubSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 10px;
  min-height: 550px;
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

const SkillsTitle = styled(SubSectionTitle)`
  margin-top: 70px;
`

const ProjectsTitle = styled(SubSectionTitle)`
  margin-left: 100px;
`

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  margin-top: -10px;
  color: ${({ theme }) => theme.subtextColor};
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
    color: ${({ theme }) => theme.hoverHighlightColor};
  }
  svg {
    font-size: 1rem;
  }
`
