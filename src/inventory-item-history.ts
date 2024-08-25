type Owner = {
  id: string
  name: string
}

type InventoryItemHistoryReason = 'purchase' | 'correction'

export interface InventoryHistoryInput {
  id: string
  variantId: string
  locationId: string
  quantity: number
  quantityAdjustment: number
  reason: InventoryItemHistoryReason
  orderId: string
  owner: Owner | null
}

export interface InventoryHistoryOutput {
  id: string
  variantId: string
  locationId: string
  quantity: number
  quantityAdjustment: number
  reason: InventoryItemHistoryReason
  orderId: string
  owner: Owner | null
  createdAt: string | null
}
