import Axios from 'axios'

export * from './endpoints'

export const BASE_URL = 'http://stock.yarbek.uz'

export const api = Axios.create({
  baseURL: BASE_URL + '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
