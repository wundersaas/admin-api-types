export interface InventoryDTO {
  id: string
  variant_id: string
  available: number
  reserved_quantity: number
  created_at: Date
  updated_at: Date
  title: string
  sku: string
  // reserved_quantity: string
  product: {
    id: string
    title: string
  }
}
