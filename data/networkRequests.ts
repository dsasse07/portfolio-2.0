import { gql, GraphQLClient } from 'graphql-request'

// Fetch all of my blog posts from Dev.to REST API

export const fetchMyArticles = () => {
  const authHeader = new Headers()
  authHeader.append('api-key', process.env.DEV_API_KEY!)
  const configInit: RequestInit = {
    method: 'GET',
    headers: authHeader,
  }

  return fetch('https://dev.to/api/articles/me/published', configInit).then(
    (articlesData) => articlesData.json()
  )
}

// Fetch single blog article from Dev.to REST API using it's id

export const fetchOneArticle = (id: string) => {
  return fetch(`https://dev.to/api/articles/${id}`).then((articleData) =>
    articleData.json()
  )
}

// Fetch User info from GitHub GraphQL API

export const fetchGitHub = async () => {
  const endpoint = 'https://api.github.com/graphql'
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })
  const query = gql`
    query ($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              firstDay
              contributionDays {
                color
                contributionCount
                contributionLevel
                date
                weekday
              }
            }
          }
        }
      }
    }
  `
  const variables = {
    username: 'dsasse07',
  }
  const data = await client.request(query, variables)
  return data
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

export const fetchPortfolioProjects = async () => {
  const endpoint = 'https://api.github.com/graphql'
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })
  const query = gql`
    {
      search(
        query: "topic:portfolio-project user:dsasse07"
        type: REPOSITORY
        first: 100
      ) {
        nodes {
          ... on Repository {
            databaseId
            name
            url
            description
            repositoryTopics(first: 100) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  `
  const variables = {
    username: 'dsasse07',
  }
  const {
    search: { nodes },
  } = await client.request(query, variables)
  return nodes
}

export const fetchProject = async (name: string) => {
  const endpoint = 'https://api.github.com/graphql'
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })
  const query = gql`
    query ($name: String!, $owner: String!) {
      repository(name: $name, owner: $owner) {
        databaseId
        name
        url
        description
        repositoryTopics(first: 100) {
          nodes {
            topic {
              name
            }
          }
        }
        object(expression: "main:README.md") {
          ... on Blob {
            text
          }
        }
      }
    }
  `
  const variables = {
    name: name,
    owner: 'dsasse07',
  }
  const { repository } = await client.request(query, variables)
  const [logo, demoVideo, deployUrl] = repository.object.text.match(
    // Matches urls after [... Logo], [... Video], [Deploy Url]
    /(?<=Logo\]\()(https:\/\/[\w\.\/\?\=\-]+)|(?<=Video\]\()(https:\/\/[\w\.\/\?\=\-]+)|(?<=Url\]\()(https:\/\/[\w\.\/\?\=\-]+)/g
  )
  return { ...repository, logo, demoVideo, deployUrl }
}
