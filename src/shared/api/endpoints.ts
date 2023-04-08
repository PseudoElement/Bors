export const endpoints_user = {
  register: '/auth/register/',
  login: '/auth/login/',
  auth_me: '/auth/me/',
  logout: '/auth/logout/',
  forgot: '/auth/forgot/',
  profile: '/auth/profile/',
  avatar: '/auth/avatar/',
}

export const endpoints_stock = {
  stock_all: '/stock/',
  stock_buy: '/stock/buy/',
  stock_my: '/stock/my/',
  stock_id: (id: number) => `/stock/${id}/`,
  stock_top: '/stock/top/',
}
