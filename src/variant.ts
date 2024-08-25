import { ImageInput, ImageOutput } from './image'
import { MetafieldOutput } from './metafield'
import { MetafieldValueInput } from './metafield-value'

type InventoryPolicy = 'continue' | 'deny'

export interface VariantInput {
  id: string
  productId: string
  title: string
  handle: string
  price: string
  compareAtPrice: string | null
  cost: string | null
  inventoryQuantity: 0
  position: number
  option1: string
  option2: string
  color: OptionsColorInput
  barcode: string
  mpn: string
  reference: string
  sku: string
  weight: number
  height: number
  width: number
  depth: number
  metafields: MetafieldValueInput[]
  images: VariantImageInput[]
}

export interface VariantProductInput extends VariantInput {
  product_title: string
  product_handle: string
  product_body_html: string
  product_active: boolean
  product_inventory_policy: InventoryPolicy
  product_requires_shipping: boolean
  product_tags: string[]
  product_metafields: MetafieldValueInput[]
  product_images: VariantImageInput[]
  product_categories: VariantProductCategoryDB[]
  product_brand: VariantProductBrandDB
  product_options: ProductOptionInput[]
  product_template_suffix: string
  product_created_at: Date
  product_updated_at: Date
}

type OptionsColorInput = {
  value: string
  hexadecimal: string
  image: ImageInput
}

type VariantImageInput = {
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

export interface VariantOutput {
  id: string
  productId: string
  title: string
  handle: string
  price: string
  compareAtPrice: string | null
  cost: string | null
  inventoryQuantity: 0
  position: number
  option1: string
  option2: string
  option3: string
  color: OptionsColorOutput
  barcode: string
  mpn: string
  reference: string
  sku: string
  weight: number
  height: number
  width: number
  depth: number
  createdAt: string | null
  updatedAt: string | null
  metafields: MetafieldOutput[]
  images: ProductImageDTO[]
}

type OptionsColorOutput = {
  value: string
  hexadecimal: string
  image: ImageOutput
}
