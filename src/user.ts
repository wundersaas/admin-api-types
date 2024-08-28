type ImageInput = {
  src: string
  alt: string
}

export interface UserInput {
  firstName: string
  lastName: string
  email: string
  phone: string | null
  bio: string | null
  password: string
  confirmPassword: string
}

export interface UserOutput {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  bio: string | null
  createdAt: string | null
  updatedAt: string | null
}
