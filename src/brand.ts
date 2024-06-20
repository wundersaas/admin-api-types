import { ImageDTO } from './image'
import { MetafieldValueDTO } from './metafield-value'

export interface BrandDTO {
  id: string
  title: string
  handle: string
  body_html: string | null
  image: ImageDTO | null
  banner: ImageDTO | null
  position: number
  meta_title: string | null
  meta_keywords: string | null
  meta_description: string | null
  active: boolean
  template_suffix: string | null
  created_at: string | null
  updated_at: string | null
  metafields: MetafieldValueDTO[] | []
}
