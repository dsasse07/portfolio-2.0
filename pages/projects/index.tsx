import { GetStaticProps } from 'next'
import React from 'react'
import { ProjectModel } from '../../models/Project'
import {
  fetchPortfolioProjects,
  PortfolioProjectsResponseModel,
} from '../../data/networkRequests'

export const getStaticProps: GetStaticProps = async (context) => {
  const projectsData: PortfolioProjectsResponseModel[] =
    await fetchPortfolioProjects()

  return {
    props: {
      projects: projectsData,
    },
    revalidate: 1800,
  }
}

interface ProjectsIndexProps {
  projects: PortfolioProjectsResponseModel[]
}

const ProjectsIndex: React.FC<ProjectsIndexProps> = ({ projects }) => {
  const components = projects.map((prj) => <p>{prj.databaseId}</p>)
  return (
    <div>
      All Projects Here
      {components}
    </div>
  )
}

export default ProjectsIndex
