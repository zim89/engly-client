import type {
  englishLevels,
  genders,
  nativeLanguages,
  storageKeys,
  tokenTypes,
} from '@/shared/constants'

export type TokenType = (typeof tokenTypes)[keyof typeof tokenTypes]
export type NativeLanguageType = (typeof nativeLanguages)[keyof typeof nativeLanguages]
export type GenderType = (typeof genders)[keyof typeof genders]
export type EnglishLevelType = (typeof englishLevels)[keyof typeof englishLevels]
export type StorageKeys = (typeof storageKeys)[keyof typeof storageKeys]

export type SignalOptions = {
  signal: AbortSignal
}
