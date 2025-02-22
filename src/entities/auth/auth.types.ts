import type {
  EnglishLevelType,
  GenderType,
  NativeLanguageType,
  TokenType,
} from '@/shared/types'

export interface RegisterRequestDto {
  username: string
  email: string
  password: string
  englishLevel: EnglishLevelType
  nativeLanguage: NativeLanguageType
  goals: string
  gender: GenderType
  avatar?: File
}

export interface LoginRequestDto {
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
