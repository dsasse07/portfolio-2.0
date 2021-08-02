export interface ProjectModel {
  id: string
  title: string
  logo: string
  description: string
  repoLink: string
  url: string | null
  demoVideo: string
  embedId: string
  technologies: string[]
}

export interface PortfolioProjectsResponseModel {
  databaseId: number
  name: string
  url: string
  updatedAt: string
  description: string
  repositoryTopics: {
    nodes: {
      topic: {
        name: string
      }
    }[]
  }
  object: {
    text: string
  }
  deployUrl?: string
  logo: string
  demoVideo?: string
}
