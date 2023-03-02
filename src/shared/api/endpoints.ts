// for several APIs, create several objects like authEndpoints, shopEndpoints, etc.

export const endpoints = {
  user: '/auth/me/',
  address: {
    delete_address: (id: number) => `/address/delete/${id}`,
  },
}
