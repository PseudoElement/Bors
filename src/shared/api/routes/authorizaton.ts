import { AxiosPromise } from 'axios'

import { api, endpoints_user } from '../index'

import {
  UserRegRequest,
  UserAuthResponse,
  UserAuthRequest,
} from '../../types/user'

export const authorizaton = (
  authUserForms: UserAuthRequest
): AxiosPromise<UserAuthResponse> => {
  return api.post(endpoints_user.login, authUserForms)
}
