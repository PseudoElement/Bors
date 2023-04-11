import { UserRegRequest, UserAuthResponse, UserAuthRequest } from '../../types/user'
import { api, endpoints_user } from '../index'
import { AxiosPromise } from 'axios'

// export const example = (
//   newUserForms: UserRegRequest
// ): AxiosPromise<UserRegResponse> => {
//   return api.post(endpoints_user.login, newUserForms)
// }

export const userAuth = (
  authUserForms: UserAuthRequest
): AxiosPromise<UserAuthResponse> => {
  return api.post(endpoints_user.login, authUserForms)
}

export const userRegister = (
  regUserForms: UserRegRequest
): AxiosPromise<UserRegRequest> => {
  return api.post(endpoints_user.register, regUserForms)
}
