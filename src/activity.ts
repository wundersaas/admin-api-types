export interface ActivityDTO {
  id: string
  resource_id: string
  resource: string
  action: 'create' | 'update' | 'delete'
  topic: string
  author: string
  created_at: string | null
  message: string
  user: {
    id: string
    first_name: string
    last_name: string
  }
}
