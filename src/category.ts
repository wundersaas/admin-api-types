import { ImageDTO } from './image'
import { MetafieldValueDTO } from './metafield-value'

export interface CategoryTreeDTO extends CategoryDTO {
  nodes: Partial<CategoryDTO>[]
}

export interface CategoryDTO {
  id: string
  parent_id: string | null
  title: string
  handle: string
  body_html: string | null
  image: ImageDTO | null
  banner: ImageDTO | null
  position: number
  depth: number
  breadcrumb: string | null
  meta_title: string | null
  meta_description: string | null
  active: boolean
  template_suffix: string | null
  metafields: MetafieldValueDTO[] | []
  created_at: string | null
  updated_at: string | null
}
