import Axios from 'axios'

export * from './endpoints'

export const URL = ``

export const api = Axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
