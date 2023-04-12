import { api, endpoints_site } from '../index'
import { AxiosPromise } from 'axios'
import { SiteDataResponse } from '../../types/site'

export const getInfoCards = (): AxiosPromise<SiteDataResponse> => {
  return api.get(endpoints_site.site_info)
}
