import { ImageDTO } from './image'
import { MetafieldValueDTO, MetafieldValueInput } from './metafield-value'
import { VariantDTO } from './variant'

export type InventoryPolicyDTO = 'continue' | 'deny'
export interface ProductImageDTO extends ImageDTO {
  id: string
  product_id: string
}

export interface ProductDTO {
  id: string
  brand_id: string | null
  category_ids: string[] | []
  title: string
  body_html: string
  handle: string
  template_suffix: string | null
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
  metafields: MetafieldValueDTO[]
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

export interface ProductInput {
  variants: VariantInput[]
  brand_id: ObjectId | null
  category_ids: ObjectId[] | []
  title: string
  body_html: string
  handle: string
  template_suffix: string
  tags: string[]
  active: boolean
  requires_shipping: boolean
  inventory_policy: InventoryPolicy
  images: ProductImageInput[] | []
  image: ProductImageInput | null
  created_at: Date
  updated_at: Date
  published_at: string | null
  options: ProductOptionInput[]
  brand: ProductBrandInput | null
  categories: ProductCategoryInput[]
  metafields: MetafieldValueInput[]
}

type InventoryPolicy = 'continue' | 'deny'

type ProductImageInput = {
  id: string
  product_id: string
  src: string
  alt?: string
  updated_at?: string
  created_at?: string
  position?: number
  width?: number
  height?: number
  type?: string
  bytes?: number
}

type ProductOptionInput = {
  title: string
  values: string[]
}

type ProductCategoryInput = {
  id?: string
  title?: string
  google_taxonomy_id?: number
}

type ProductBrandInput = {
  id?: string
  title?: string
}
