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
