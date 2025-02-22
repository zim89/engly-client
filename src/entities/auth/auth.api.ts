import { axiosBase } from '@/shared/api'
import { tokenTypes } from '@/shared/constants'
import type { SignalOptions } from '@/shared/types'
import type { AuthResponse, LoginRequestDto, RegisterRequestDto } from './auth.types'

const endpoints = {
  register: '/sign-up',
  login: '/sign-in',
  refreshToken: '/refresh-token',
} as const

export const authApi = {
  register: async (
    data: RegisterRequestDto,
    { signal }: SignalOptions,
  ): Promise<AuthResponse> => {
    const response = await axiosBase.post<AuthResponse>(endpoints.register, data, {
      signal,
    })

    return response.data
  },

  login: async (
    data: LoginRequestDto,
    { signal }: SignalOptions,
  ): Promise<AuthResponse> => {
    const encodedCredentials = btoa(`${data.email}:${data.password}`)

    const response = await axiosBase.post<AuthResponse>(
      endpoints.login,
      {},
      {
        signal,
        headers: {
          Authorization: `${tokenTypes.basic} ${encodedCredentials}`,
        },
      },
    )

    return response.data
  },

  refreshTokens: async (): Promise<AuthResponse> => {
    const response = await axiosBase.post<AuthResponse>(
      endpoints.refreshToken,
      {},
      {
        headers: {
          // TODO: Implement getRefreshToken() method
          // Authorization: `Bearer ${getRefreshToken()}`,
        },
      },
    )

    return response.data
  },

  logout: async (): Promise<void> => {
    // TODO: Implement logout logic
  },
} as const
