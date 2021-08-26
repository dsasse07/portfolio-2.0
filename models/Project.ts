export interface PortfolioProjectsResponseModel {
  databaseId: number
  name: string
  url: string
  route: string
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
  logo: string
  deployUrl?: string
  demoVideo?: string
}
