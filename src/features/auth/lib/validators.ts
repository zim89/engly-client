import { type UseFormReturn } from 'react-hook-form'
import type { RegisterFormValues } from './register-schema'

export const validatePasswords = (form: UseFormReturn<RegisterFormValues>): boolean => {
  const { password, confirm } = form.getValues()

  if (!password || !confirm) {
    form.setError('confirm', {
      type: 'manual',
      message: 'Обязательное поле',
    })
    return false
  }

  if (password !== confirm) {
    form.setError('confirm', {
      type: 'manual',
      message: 'Пароли должны совпадать!',
    })
    return false
  }

  return true
}
