import { AxiosPromise } from 'axios'

import { api, endpoints_site } from '../index'
import { SiteSendEmailResponse } from 'shared/types/site'

export const sendEmail = (data: {
  email: string
}): AxiosPromise<SiteSendEmailResponse> =>
  api.post(endpoints_site.site_form, data)
