import { MetafieldValueDTO } from './metafield-value'

export interface PageDTO {
  id: string
  title: string
  handle: string
  active: boolean
  body_html: string | null
  template_suffix: string | null
  published_at: string | null
  created_at: string | null
  updated_at: string | null
  metafields: MetafieldValueDTO[] | []
}
