export interface LocationOutput {
  id: string
  title: string
  active: boolean
  default: boolean
  address1: string
  address2: string
  neighbourhood: string
  number: string
  city: string
  country: string
  countryCode: string
  phone: string | null
  province: string
  provinceCode: string
  zipcode: string
  createdAt: string | null
  updatedAt: string | null
}

export interface LocationInput {
  title: string
  active?: boolean
  default?: boolean
  address1?: string
  address2?: string
  neighbourhood?: string
  number?: string
  city?: string
  country?: string
  countryCode?: string
  phone?: string | null
  province?: string | null
  provinceCode?: string
  zipcode?: string
}
