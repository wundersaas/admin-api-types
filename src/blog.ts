export interface BlogDTO {
  id: string
  created_at: string
  updated_at: string | null
  title: string
  handle: string
  commentable: boolean
  template_suffix: string
  tags: string[]
}
