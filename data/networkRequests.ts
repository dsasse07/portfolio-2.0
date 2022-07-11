import { gql, GraphQLClient } from 'graphql-request'
import { PortfolioProjectsResponseModel } from '../models/Project'
import { formatRepoName } from '../utils/formatRepoName'
import { parseRepoReadme } from '../utils/parseRepoReadme'

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

/* 
  Get all projects tagged with "portfolio-project" by user
  using Github GraphQL API

  Returns repo info and scans README for additional data:
  - logo = URL regex match after ![__ Logo] in Readme
  - demoVideo = URL regex match after [Demo Video] in Readme
  - deployUrl = URL regex match after [__ Url] in Readme

  Repo name is formatted to removed dashes and capitalize first letters
*/

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
            updatedAt
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
      }
    }
  `
  const variables = {
    username: 'dsasse07',
  }
  const {
    search: { nodes },
  } = await client.request(query, variables)
  // Format Repo Name and Match Portfolio Data from Readme.md file
  const updatedNodes = nodes.map((node: PortfolioProjectsResponseModel) => {
    // Save repo name for route url before formatting
    const route = node.name
    node.name = formatRepoName(node.name)

    const regexMatches = parseRepoReadme(node.object.text)
    const [logo = '', demoVideo = '', deployUrl = ''] = regexMatches ?? []
    return { ...node, route, logo, demoVideo, deployUrl }
  })

  // Default sorting of projects will be most recent first
  return updatedNodes.sort(
    (a: PortfolioProjectsResponseModel, b: PortfolioProjectsResponseModel) => {
      return (new Date(b.updatedAt) as any) - (new Date(a.updatedAt) as any)
    }
  )
}

/*
  Gets specific GitHub project by repo name & username

  Returns same info as above
*/

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
        updatedAt
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
  // Save repo name for route url before formatting
  const route = repository.name
  repository.name = formatRepoName(repository.name)

  // @ts-ignore
  const [logo = '', demoVideo = '', deployUrl = ''] = parseRepoReadme(
    repository.object.text
  )

  return { ...repository, route, logo, demoVideo, deployUrl }
}
