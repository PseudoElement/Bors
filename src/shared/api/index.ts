import Axios from 'axios'
import { cookies } from '../utils/Cookies'

export * from './endpoints'

export const BASE_URL = 'https://stock.yarbek.uz'

export const api = Axios.create({
  baseURL: BASE_URL + '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${cookies.get('token')}`,
  },
})
