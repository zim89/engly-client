import type {
  EnglishLevelType,
  GenderType,
  NativeLanguageType,
} from '@/shared/constants'
import type { TokenType } from '@/shared/types'

export interface RegisterFormData {
  username: string
  email: string
  password: string
  dateOfBirth: string
  englishLevel: EnglishLevelType
  nativeLanguage: NativeLanguageType
  goals: string
  gender: GenderType
  avatar?: File
}

export interface LoginFormData {
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  access_token_expiry: number
  token_type: TokenType
  user_name: string
  refresh_token: string
}
