import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { projects } from '../../data/projects'
import { ProjectModel } from '../../models/Project'
import { ParsedUrlQuery } from 'querystring'

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = projects.map((_, index) => {
    return { params: { projectId: index.toString() } }
  })
  return {
    fallback: false,
    paths: ids,
  }
}

interface StaticPropsParams extends ParsedUrlQuery {
  projectId: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { projectId } = context.params as StaticPropsParams
  const projectData: ProjectModel = projects[+projectId]

  return {
    props: {
      article: projectData,
    },
    revalidate: 3600,
  }
}

interface ProjectShowPageProps {
  project: ProjectModel
}

const ProjectShowPage: React.FC<ProjectShowPageProps> = ({ project }) => {
  const {
    title,
    logo,
    description,
    repoLink,
    url,
    demoVideo,
    embedId,
    technologies,
  } = project

  return (
    <div>
      <p>{title}</p>
      <p>{logo}</p>
      <p>{description}</p>
      <p>{repoLink}</p>
      <p>{url}</p>
      <p>{demoVideo}</p>
      <p>{embedId}</p>
      <p>{technologies}</p>
    </div>
  )
}

export default ProjectShowPage
