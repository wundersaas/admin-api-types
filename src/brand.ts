import { ImageOutput } from './image'
import { MetafieldValueInput, MetafieldValueOutput } from './metafield-value'

type ImageInput = {
  src: string
  alt: string
}

export interface BrandOutput {
  id: string
  title: string
  handle: string
  bodyHtml: string | null
  image: ImageOutput | null
  banner: ImageOutput | null
  position: number
  metaTitle: string | null
  metaDescription: string | null
  active: boolean
  templateSuffix: string | null
  createdAt: string | null
  updatedAt: string | null
  metafields: MetafieldValueOutput[] | []
}

export interface BrandInput {
  title: string
  handle: string
  bodyHtml: string | null
  image: ImageInput | null
  banner: ImageInput | null
  position: number
  metaTitle: string | null
  metaDescription: string | null
  active: boolean
  templateSuffix: string | null
  metafields?: MetafieldValueInput[] | []
}
