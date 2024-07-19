import { MetafieldValueDTO } from './metafield-value'

export interface BlogDTO {
  id: string
  created_at: string | null
  updated_at: string | null
  title: string
  handle: string
  active: boolean
  commentable?: boolean
  template_suffix: string
  meta_title: string | null
  meta_description: string | null
  tags: string[]
  metafields: MetafieldValueDTO[]
}
