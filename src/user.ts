import { ImageOutput } from './image'

type ImageInput = {
  src: string
  alt: string
}

export interface UserInput {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string | null
  bio?: string | null
  password?: string
  avatar?: ImageInput
  confirmPassword?: string
  language?: string
  timezone?: string
}

export interface UserOutput {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  bio: string
  emailVerified: boolean
  avatar: ImageOutput
  passwordUpdatedAt: string
  language?: string
  timezone?: string
  createdAt: string
  updatedAt: string
}
