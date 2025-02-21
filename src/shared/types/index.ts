import type {
  englishLevels,
  genders,
  nativeLanguages,
} from '@/shared/constants'

export type GenderType = (typeof genders)[keyof typeof genders]

export type NativeLanguageType =
  (typeof nativeLanguages)[keyof typeof nativeLanguages]

export type EnglishLevelType =
  (typeof englishLevels)[keyof typeof englishLevels]
