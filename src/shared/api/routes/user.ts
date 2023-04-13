import {
  UserRegRequest,
  UserAuthResponse,
  LogoutUser,
  UserAuthRequest,
  UserMeResponse,
  UserRegResponse,
} from '../../types/user'

import { api, endpoints_user } from '../index'
import { AxiosPromise } from 'axios'

export const userAuth = (
  authUserForms: UserAuthRequest
): AxiosPromise<UserAuthResponse> => {
  return api.post(endpoints_user.login, authUserForms)
}

export const authMe = (): AxiosPromise<UserMeResponse> => {
  return api.get(endpoints_user.auth_me)
}

export const logoutAuth = (): AxiosPromise<LogoutUser> => {
  return api.post(endpoints_user.logout)
}

export const userRegister = (
  regUserForms: UserRegRequest
): AxiosPromise<UserRegResponse> => {
  return api.post(endpoints_user.register, regUserForms)
}
