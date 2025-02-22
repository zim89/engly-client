export const appConsts = {
  apiUrl: 'https://favourable-rodie-java-service-b82e5859.koyeb.app',
  isClient: typeof window !== 'undefined',
} as const

export const nativeLanguages = {
  english: 'ENGLISH',
  japanese: 'JAPANESE',
  hindi: 'HINDI',
  russian: 'RUSSIAN',
  spanish: 'SPANISH',
  portuguese: 'PORTUGUESE',
  german: 'GERMAN',
  french: 'FRENCH',
  arabic: 'ARABIC',
  chinese: 'CHINESE',
} as const

export const genders = {
  female: 'FEMALE',
  male: 'MALE',
} as const

export const englishLevels = {
  a1: 'A1',
  a2: 'A2',
  b1: 'B1',
  b2: 'B2',
  c1: 'C1',
  c2: 'C2',
} as const

export const tokenTypes = {
  bearer: 'Bearer',
  basic: 'Basic',
} as const
