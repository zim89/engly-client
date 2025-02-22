import { type UseFormReturn } from 'react-hook-form'
import { type RegisterFormData } from '../model'

export const validatePasswords = (
  form: UseFormReturn<RegisterFormData>,
): boolean => {
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
