export interface ShopDTO {
  id: string
  email: string
  active: boolean
  title: string
  handle: string
  phrase: string
  meta_description: string
  meta_keywords: string
  domain: string
  ssl: boolean
  theme_id: number
  phone: string | null
  secret: string
  industry: string
  customer_register_individual: boolean
  customer_register_company: boolean
  customer_register_approve: 'automatic' | 'manual'
  customer_register_for: 'not_required' | 'checkout' | 'view_prices' | 'view_products'
  catalog_mode: boolean
  password_protection: PasswordProtection | null
  created_at: string | null
  updated_at: string | null
  suspended_at: string | null
  canceled_at: string | null
}

interface PasswordProtection {
  password: string
  enabled: true
  message: string
}
