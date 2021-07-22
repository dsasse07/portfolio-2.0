export interface ArticleModel {
  id: string
  title: string
  description: string
  date: string
  url: string
  viewCount: string
  reactionCount: string
  image: string
  tags: string
  [key: string]: string
}
