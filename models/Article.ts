export interface ArticleModel {
  id: number
  title: string
  description: string
  published_timestamp: string
  url: string
  cover_image: string
  tags: string[]
  body_markdown: string
  viewCount?: string
  reactionCount?: string
}
