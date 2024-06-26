export interface VariantDTO {
  id: string
  product_id: string
  title: string
  handle: string
  price: string | null
  compare_at_price: string | null
  cost: string | null
  inventory_quantity: 0
  position: 1
  option1: string
  option2: string
  option3: string
  color: OptionColor
  barcode: string
  mpn: string
  reference: string
  sku: string
  weight: number
  height: number
  width: number
  depth: number
  created_at: string | null
  updated_at: string | null
}
