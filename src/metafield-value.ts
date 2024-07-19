export interface MetafieldValueDTO {
  namespace: string
  key: string
  value: any
  type: MetafieldType
  created_at: string | null
}

type MetafieldType =
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
