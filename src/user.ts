export interface UserDTO {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string | null
  owner: boolean
  bio: string | null
  scopes: string[]
  created_at: string | null
  updated_at: string | null
}
