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

export const fetchOneArticle = (id: string) => {
  return fetch(`https://dev.to/api/articles/${id}`).then((articleData) =>
    articleData.json()
  )
}
