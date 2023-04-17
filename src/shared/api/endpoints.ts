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
  stock_all: '/stock/',
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
