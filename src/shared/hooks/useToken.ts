import { api } from '../api'
import { cookies } from '../utils/Cookies'

export const useToken = () => {
  const token = cookies.get('token')

  if (!token) return undefined

  return token
}
