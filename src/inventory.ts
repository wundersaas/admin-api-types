import { ImageDTO } from 'admin-api-types'

type InventoryLevel = {
  location_id: string
  available: string
}

export interface InventoryDTO {
  id: string
  variant_id: string
  available: number
  reserved_quantity: number
  created_at: Date
  updated_at: Date
  title: string
  sku: string
  image: ImageDTO
  inventory_levels: InventoryLevel[]
  // reserved_quantity: string
  product: {
    id: string
    title: string
  }
}
