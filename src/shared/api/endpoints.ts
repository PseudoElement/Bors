import { Params } from '../types/stocks'

export const endpoints_user = {
  register: '/auth/register/',
  login: '/auth/login/',
  auth_me: '/auth/me/',
  logout: '/auth/logout/',
  forgot: '/auth/forgot/',
  profile: '/auth/profil/',
  avatar: '/auth/avatar/',
}

export const endpoints_stock = {
  stock_all: (params: Params) =>
    `/stock?by_price=${params?.price?.value}&by_popularity=${params?.popularity?.value}&per_page=${params.per_page}&search=${params.search}&page=${params.current_page}`,
  stock_buy: '/stock/buy/',
  stock_my: '/stock/my/',
  stock_id: (id: number) => `/stock/${id}/`,
  stock_top: '/stock/top/',
}

export const endpoints_site = {
  site_form: '/site/form/',
  site_info: '/site/info/',
  sponsors: '/site/sponsors/',
  stocks_top: (date: string) => `/stocks/top?day=${date}`,
}
