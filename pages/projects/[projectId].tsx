import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import {
  fetchPortfolioProjects,
  fetchProject,
  PortfolioProjectsResponseModel,
} from '../../data/networkRequests'
import MarkDown from '../../components/ui/MarkDown'
import styled from 'styled-components'

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsData: PortfolioProjectsResponseModel[] =
    await fetchPortfolioProjects()

  const ids = projectsData.map((project) => {
    return { params: { projectId: project.route } }
  })
  return {
    fallback: 'blocking',
    paths: ids,
  }
}

interface StaticPropsParams extends ParsedUrlQuery {
  projectId: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { projectId } = context.params as StaticPropsParams
  const project = await fetchProject(projectId)
  return {
    props: {
      project,
    },
    revalidate: 1800,
  }
}

interface ProjectShowPageProps {
  project: PortfolioProjectsResponseModel
}

const ProjectShowPage: React.FC<ProjectShowPageProps> = ({ project }) => {
  return (
    <Container>
      <MarkDown>{project.object.text}</MarkDown>
    </Container>
  )
}

export default ProjectShowPage

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
