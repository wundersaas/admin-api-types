export interface ScriptDTO {
  id: string
  title: string
  src: string
  event: 'onload'
  display_scope: 'all'
  cache: boolean
  kind: 'url' | 'script'
  script: string
  location: 'header' | 'footer'
  created_at: string | null
  updated_at: string | null
}
