export type ImageOutput = {
  src: string
  alt?: string
  updatedAt?: string
  createdAt?: string
  position?: number
  width?: number
  height?: number
  type?: string
  bytes?: number
}

export type ImageInput = {
  src: string
  alt?: string
}
