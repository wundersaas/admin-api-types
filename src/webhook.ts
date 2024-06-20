export interface WebhookDTO {
  id: string
  callback_url: string
  topic: WebhookTopicDTO
  format: 'JSON'
  api_version: 'stable'
  created_at: string | null
  updated_at: string | null
}

export enum WebhookTopicDTO {
  'BRAND_CREATE',
  'BRAND_DELETE',
  'BRAND_UPDATE',
  'CATEGORY_CREATE',
  'CATEGORY_DELETE',
  'CATEGORY_UPDATE',
  'CUSTOMER_CREATE',
  'CUSTOMER_DELETE',
  'CUSTOMER_UPDATE',
  'DISCOUNT_CREATE',
  'DISCOUNT_DELETE',
  'DISCOUNT_UPDATE',
  'ORDER_CANCEL',
  'ORDER_CREATE',
  'ORDER_DELETE',
  'ORDER_FULFILLMENT',
  'ORDER_PAYMENT',
  'ORDER_UPDATE',
  'PAYMENT_CREATE',
  'PAYMENT_DELETE',
  'PAYMENT_UPDATE',
  'PRODUCT_CREATE',
  'PRODUCT_DELETE',
  'PRODUCT_UPDATE',
  'SHOP_UPDATE'
}
