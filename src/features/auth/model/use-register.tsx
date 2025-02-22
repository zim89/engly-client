import { useMutation } from '@tanstack/react-query'
import { authApi, type RegisterRequestDto } from '@/entities/auth'
import { saveTokenStorage } from '@/shared/utils'

export interface RegisterMutationParams {
  formData: RegisterRequestDto
  meta?: {
    redirectUrl?: string
    signal?: AbortSignal
  }
}

export function useRegister() {
  const abortController = new AbortController()

  const registerMutation = useMutation({
    mutationFn: ({ formData, meta }: RegisterMutationParams) =>
      authApi.register(formData, {
        signal: meta?.signal ?? abortController.signal,
      }),
    onError: async error => {
      console.log(error)
    },
    onSuccess: async data => {
      console.log('[USER-->use-register]', data)
      saveTokenStorage(data.access_token)
    },
    // onSettled: async (data, error, variables, context) => {},
  })

  return {
    data: registerMutation.data,
    error: registerMutation.error,
    isPending: registerMutation.isPending,
    mutate: registerMutation.mutate,
  }
}
