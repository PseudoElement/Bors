import { StockFilters } from '../types/stocks'

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
  stock_all: (filters: StockFilters) =>
    `/stock?by_price=${filters.price.value}&by_popularity=${filters.popularity.value}&search=${filters.search}&page=${filters.current_page}`,
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
