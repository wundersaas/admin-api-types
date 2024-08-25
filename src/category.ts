import { ImageInput, ImageOutput } from './image'
import { MetafieldValueOutput } from './metafield-value'

export interface CategoryTreeOutput extends CategoryOutput {
  nodes: CategoryTreeOutput[]
}

export interface CategoryOutput {
  id: string
  parentId: string | null
  title: string
  handle: string
  bodyHtml: string | null
  image: ImageOutput | null
  banner: ImageOutput | null
  position: number
  depth: number
  breadcrumb: string | null
  metaTitle: string | null
  metaDescription: string | null
  active: boolean
  templateSuffix: string | null
  metafields: MetafieldValueOutput[] | []
  createdAt: string | null
  updatedAt: string | null
}

export interface CategoryInput {
  id: string
  createdAt: Date
  updatedAt: Date
  parentId: string | null
  title: string
  handle: string
  bodyHtml: string | null
  image: ImageInput | null
  banner: ImageInput | null
  position: number
  depth: number
  metaTitle: string | null
  metaDescription: string | null
  active: boolean
  templateSuffix: string | null
  metafields: any
}

export interface CategoryTreeInput extends CategoryInput {
  items: CategoryTreeInput[]
}
