import { MetafieldDTO } from './metafield'

export type CustomerType = 'individual' | 'company'

export interface CustomerDTO {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  doc: string
  brithday: string
  password?: string
  type?: CustomerType
  accepts_marketing?: boolean
  active: boolean
  token?: string
  notes?: string
  tags?: string[]
  created_at: string | null
  updated_at: string | null
  addresses: CustomerAddressDTO[]
  metafields: MetafieldDTO[]
}

export interface CustomerAddressDTO {
  id: string
  customer_id: string
  address1: string
  address2: string
  city: string
  province: string
  number: string
  zipcode: string
  receiver: string
  country: string
  neighbourhood: string
  created_at: string | null
  updated_at: string | null
}
