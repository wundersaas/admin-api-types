export interface MenuDTO {
  id: string
  title: string
  handle: string
  is_default: boolean
  nodes: MenuItemDTO[]
  created_at: string | null
  updated_at: string | null
}

export interface MenuItemDTO {
  id: string
  nodes: MenuItemDTO[]
  resource_id: string
  tags: string[]
  title: string
  type: string
  url: string
}
