export interface InventoryItemInput {
  variantId: string
  locationId: string
  quantityAdjustment: number
  quantity: number
}

export interface InventoryItemOutput {
  variantId: string
  locationId: string
  quantity: number
  createdAt: string | null
  updatedAt: string | null
}
