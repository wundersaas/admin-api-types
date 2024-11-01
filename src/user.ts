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
  image?: ImageInput
  confirmPassword?: string
  language?: string
  timezone?: string
}

export interface UserOutput {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  bio: string | null
  emailVerified: boolean
  image: ImageOutput
  passwordUpdatedAt: string | null
  language?: string
  timezone?: string
  createdAt: string | null
  updatedAt: string | null
}
