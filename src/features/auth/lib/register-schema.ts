import { z } from 'zod'
import { englishLevels, genders, nativeLanguages, regex } from '@/shared/constants'
import type { EnglishLevelType, GenderType, NativeLanguageType } from '@/shared/types'

const maxUsernameLength = 50
const maxEmailLength = 50
const maxPasswordLength = 30
const minPasswordLength = 8

export const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(1, {
        message: 'Required field',
      })
      .max(maxUsernameLength, {
        message: `Username must be less than ${maxUsernameLength} characters`,
      })
      .regex(new RegExp(regex.username), {
        message:
          'Username must start with a letter and can contain only letters, numbers, dots, underscores and hyphens',
      }),
    email: z
      .string()
      .max(maxEmailLength, {
        message: `Email must be less than ${maxEmailLength} characters`,
      })
      .email({
        message: 'Invalid email address',
      }),
    password: z
      .string()
      .min(1, {
        message: 'Required field',
      })
      .min(minPasswordLength, {
        message: `Password must be at least ${minPasswordLength} characters`,
      })
      .max(maxPasswordLength, {
        message: `Password must be less than ${maxPasswordLength} characters`,
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
