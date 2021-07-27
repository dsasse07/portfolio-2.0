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
  logoUrl?: string
  demoVideo?: string
}
