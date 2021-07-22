interface MyArticleResponse {
  id: number
  title: string
  description: string
  date: string
  url: string
  viewCount: string
  reactionCount: string
  image: string
  tags: string
  [key: string]: number | string
}
export type ArticlesReponse = MyArticleResponse[]

const apiKey = process.env.DEV_API_KEY
const authHeader = new Headers()
if (typeof apiKey === 'string') {
  authHeader.append('api-key', apiKey)
}

export const fetchMyArticles = () => {
  const configInit: RequestInit = {
    method: 'GET',
    headers: authHeader,
  }

  return fetch('https://dev.to/api/articles/me/published', configInit).then(
    (articlesData) => articlesData.json()
  )
}
