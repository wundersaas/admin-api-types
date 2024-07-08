export interface LocationDTO {
  id: string
  created_at: string | null
  updated_at: string | null
  title: string
  active: boolean
  default: boolean
  address1: string
  address2: string
  neighbourhood: string
  number: string
  city: string
  country: string
  country_code: string
  phone: string | null
  province: string
  province_code: string
  zipcode: string
}
