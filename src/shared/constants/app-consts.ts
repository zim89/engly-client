export const AppConfig = {
  apiUrl: 'https://favourable-rodie-java-service-b82e5859.koyeb.app',
  isClient: typeof window !== 'undefined',
} as const

export const NativeLangEnum = {
  English: 'ENGLISH',
  Japanese: 'JAPANESE',
  Hindi: 'HINDI',
  Russian: 'RUSSIAN',
  Spanish: 'SPANISH',
  Portuguese: 'PORTUGUESE',
  German: 'GERMAN',
  French: 'FRENCH',
  Arabic: 'ARABIC',
  Chinese: 'CHINESE',
} as const

export const GenderEnum = {
  Female: 'FEMALE',
  Male: 'MALE',
} as const

export const EngLevelEnum = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
} as const

export const TokenTypeEnum = {
  Bearer: 'Bearer',
  Basic: 'Basic',
} as const

export const StorageKeyEnum = {
  AccessToken: 'engly_accessToken',
  RefreshToken: 'engly_refreshToken',
} as const
