import { ImageDTO } from './image'

export interface ArticleDTO {
  id: string
  blog_id: string
  title: string
  created_at: string
  body_html: string
  author: string
  user_id: string
  published_at: string
  updated_at: string
  summary_html: string
  template_suffix: string
  handle: string
  tags: string[]
  image: ImageDTO
}
