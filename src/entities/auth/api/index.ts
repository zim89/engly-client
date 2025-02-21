import { axiosBase } from '@/shared/api'
import { saveTokenStorage } from '@/shared/utils'
import type { AuthResponse, LoginFormData, RegisterFormData } from '../model'

const authEndpoints = {
  register: '/sign-up',
  login: '/sign-in',
  refreshToken: '/refresh-token',
}
class AuthApi {
  // private BASE_URL = '/auth'

  async register(
    formData: RegisterFormData,
    { signal }: { signal: AbortSignal },
  ) {
    // const url = `${this.BASE_URL}/sign-up`

    const response = await axiosBase.post<AuthResponse>(
      authEndpoints.register,
      formData,
      {
        signal,
      },
    )

    // FIXME: перенести сохранение в onSuccess queryOptions
    if (response.data.access_token) saveTokenStorage(response.data.access_token)

    return response.data
  }

  async login(formData: LoginFormData, { signal }: { signal: AbortSignal }) {
    const encodedCredentials = btoa(`${formData.email}:${formData.password}`)

    const response = await axiosBase.post<AuthResponse>(
      authEndpoints.login,
      {},
      {
        signal,
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      },
    )

    // FIXME: перенести сохранение в onSuccess queryOptions
    if (response.data.access_token) saveTokenStorage(response.data.access_token)

    return response.data
  }

  async refreshTokens() {
    const response = await axiosBase.post<AuthResponse>(
      authEndpoints.refreshToken,
      {},
      {
        headers: {
          // FIXME: Implement getRefreshToken() method
          // Authorization: `Bearer ${getRefreshToken()}`,
        },
      },
    )

    if (response.data.access_token) saveTokenStorage(response.data.access_token)

    return response
  }

  // FIXME: Implement logout() method
  async logout() {}
}

export const authApi = new AuthApi()
