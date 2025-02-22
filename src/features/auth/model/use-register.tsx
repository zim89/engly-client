import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { authApi, type RegisterRequestDto } from '@/entities/auth'
import { appRoutes } from '@/shared/constants'
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
  const router = useRouter()

  const registerMutation = useMutation({
    mutationFn: ({ formData, meta }: RegisterMutationParams) =>
      authApi.register(formData, {
        signal: meta?.signal ?? abortController.signal,
      }),
    onError: async error => {
      toast.error('Something went wrong. Please try again.')
      console.log(error)
    },
    onSuccess: async data => {
      toast.success('User registered successfully.')
      saveTokenStorage(data.access_token)
      router.push(appRoutes.chats)
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
