import React from 'react'
import { ProjectModel } from '../../models/Project'

interface ProjectsIndexProps {
  projects: ProjectModel[]
}

const ProjectsIndex: React.FC<ProjectsIndexProps> = ({ projects }) => {
  return <div>All Projects Here</div>
}

export default ProjectsIndex
