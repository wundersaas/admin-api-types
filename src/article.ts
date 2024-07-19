import { ImageDTO } from './image'
import { MetafieldValueDTO } from './metafield-value'

export interface ArticleDTO {
  id: string
  blog_id: string
  title: string
  active: boolean
  created_at: string | null
  body_html: string
  author: string
  user_id: string
  published_at: string | null
  updated_at: string | null
  summary_html: string
  template_suffix: string
  handle: string
  tags: string[]
  image: ImageDTO | null
  meta_title: string | null
  meta_description: string | null
  metafields: MetafieldValueDTO[]
}
