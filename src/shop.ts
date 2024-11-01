interface PasswordProtection {
  password: string
  enabled: true
  message: string
}

export interface ShopInput {
  email: string
  active: boolean
  title: string
  handle: string
  phrase: string
  metaDescription: string
  domain: string
  ssl: boolean
  themeId: number
  phone: string | null
  secret: string
  industry: string
  customerRegisterIndividual: boolean
  customerRegisterCompany: boolean
  customerRegisterApprove: 'automatic' | 'manual'
  customerRegisterFor: 'notRequired' | 'checkout' | 'viewPrices' | 'viewProducts'
  catalogMode: boolean
  passwordProtection: PasswordProtection | null
}
