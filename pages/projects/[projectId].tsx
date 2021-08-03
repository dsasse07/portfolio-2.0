import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import {
  fetchPortfolioProjects,
  fetchProject,
  PortfolioProjectsResponseModel,
} from '../../data/networkRequests'
import MarkDown from '../../components/ui/MarkDown'

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
  const component = <p>{project.name}</p>
  return (
    <div>
      Stuff and things
      {component}
      <MarkDown>{project.object.text}</MarkDown>
    </div>
  )
}

export default ProjectShowPage
