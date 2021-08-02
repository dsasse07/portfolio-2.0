import React from 'react'
import styled from 'styled-components'
import { PortfolioProjectsResponseModel } from '../../../../models/Project'
import { GitHubResponseModel } from '../../../../models/GitHub'
import GitHubGarden from './GitHubGarden'
import ProjectCard from './ProjectCard2'
import Link from 'next/link'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import themeSlice from '../../../../redux/themeSlice'

interface GitHubProps {
  profileInfo: GitHubResponseModel
  projects: PortfolioProjectsResponseModel[]
}

const GitHub: React.FC<GitHubProps> = ({ profileInfo, projects }) => {
  const { weeks } = profileInfo.contributionsCollection.contributionCalendar
  const projectComponents = projects.map((prj) => {
    let href = prj.name
    prj.name = prj.name
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    return (
      <Link href={`/${href}`} key={prj.databaseId}>
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
  svg {
    padding-left: 6px;
    font-size: 1rem;
  }
`
