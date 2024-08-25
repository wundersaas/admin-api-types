import { MetafieldValueOutput } from './metafield-value'

export interface BlogOutput {
  id: string
  createdAt: string | null
  updatedAt: string | null
  title: string
  handle: string
  active: boolean
  commentable?: boolean
  templateSuffix: string
  metaTitle: string | null
  metaDescription: string | null
  tags: string[]
  metafields: MetafieldValueOutput[]
}
