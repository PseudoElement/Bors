import {
  UserRegRequest,
  UserAuthResponse,
  LogoutUser,
  UserAuthRequest,
  UserMeResponse,
  UserRegResponse,
  User,
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

export const userUpdate = (
  updateUserForm: User
): AxiosPromise<UserMeResponse> => {
  const requestData = {
    first_name: updateUserForm.first_name,
    last_name: updateUserForm.last_name,
    phone_number: updateUserForm.phone_number,
    avanza: updateUserForm.avanza,
  }
  return api.post(endpoints_user.profile, requestData)
}

export const userRecoverPassword = (email: string): AxiosPromise<string> => {
  return api.post(endpoints_user.forgot, { email })
}

export const userAvatar = (avatar: File): AxiosPromise<string> => {
  return api.post(
    endpoints_user.avatar,
    { avatar },
    {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    }
  )
}
