export interface IndexFilterOutput {
  id: string
  title: string
  resource: string
  filter: any
  createdAt: string | null
  updatedAt: string | null
}

export interface IndexFilterInput {
  title: string
  resource: string
  choices: any
}
