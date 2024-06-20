import { ImageDTO } from './image'
import { VariantDTO } from './variant'

export type InventoryPolicyDTO = 'continue' | 'deny'
export interface ProductImageDTO extends ImageDTO {
  id: string
}

export interface ProductDTO {
  id: string
  brand_id: string | null
  category_ids: string[] | []
  feature_ids: string[] | []
  title: string
  body_html: string
  handle: string
  template_suffix: string
  tags: string[]
  active: boolean
  requires_shipping: boolean
  inventory_policy: InventoryPolicyDTO
  image: ProductImageDTO
  images: ProductImageDTO[]
  created_at: string | null
  updated_at: string | null
  published_at: string | null
  variants: VariantDTO[]
  options: OptionDTO[]
  brand: ProductBrandDTO | null
  categories: ProductCategoryDTO[]
  metafields: MetafieldDTO[]
}

type ProductCategoryDTO = {
  id?: string
  title?: string
  google_taxonomy_id?: number
}

type ProductBrandDTO = {
  id?: string
  title?: string
}

type MetafieldDTO = {
  namespace: string
  key: string
  value: string
  description: string
  resource: 'product'
  type: string
}

type OptionDTO = {
  title: string
  values: string[]
}
