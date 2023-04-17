import { AxiosPromise } from 'axios'
import { api, endpoints_site } from '../index'
import { SiteDataForSponsorsResponse } from 'shared/types/site'

export const getSponsorsInfo =
  (): AxiosPromise<SiteDataForSponsorsResponse> => {
    return api.get(endpoints_site.sponsors)
  }
