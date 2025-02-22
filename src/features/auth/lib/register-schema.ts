import { z } from 'zod'
import { englishLevels, genders, nativeLanguages } from '@/shared/constants'
import type { EnglishLevelType, GenderType, NativeLanguageType } from '@/shared/types'

export const RegisterFormSchema = z
  .object({
    username: z.string().min(1, {
      message: 'Required field',
    }),
    email: z.string().email({
      message: 'Invalid email address',
    }),
    password: z
      .string()
      .min(1, {
        message: 'Required field',
      })
      .min(8, {
        message: 'Password must be at least 8 characters',
      }),
    confirm: z.string().min(1, {
      message: 'Required field',
    }),
    nativeLanguage: z.enum(
      Object.values(nativeLanguages) as [NativeLanguageType, ...NativeLanguageType[]],
      {
        required_error: 'Required field',
        invalid_type_error: 'Please select valid native language',
      },
    ),
    englishLevel: z.enum(
      Object.values(englishLevels) as [EnglishLevelType, ...EnglishLevelType[]],
      {
        required_error: 'Required field',
        invalid_type_error: 'Please select valid English level',
      },
    ),
    gender: z.enum(Object.values(genders) as [GenderType, ...GenderType[]], {
      required_error: 'Required field',
      invalid_type_error: 'Please select valid gender',
    }),
    goals: z.string().min(1, {
      message: 'Required field',
    }),
  })
  .refine(
    values => {
      return values.password === values.confirm
    },
    {
      message: 'Passwords must match!',
      path: ['confirm'],
    },
  )

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>
