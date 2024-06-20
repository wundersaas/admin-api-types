export interface MetafieldDTO {
  id: string
  created_at: string | null
  updated_at: string | null
  title: string
  resource: 'product' | 'variant' | 'customer' | 'category' | 'page'
  namespace: string
  key: string
  description: string | null
  validations: Record<string, string>[]
  pinned: boolean
  pinned_position: number | null
  list: boolean
  type: TypesDTO
}

type TypesDTO =
  | 'single_line_text_field'
  | 'multi_line_text_field'
  | 'rich_text_field'
  | 'number_decimal'
  | 'number_integer'
  | 'file_reference'
  | 'product_reference'
  | 'category_reference'
  | 'url'
  | 'boolean'
  | 'date'
  | 'date_time'
  | 'color'
  | 'money'
