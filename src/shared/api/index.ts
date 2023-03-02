import Axios from 'axios'

export * from './endpoints'

export const URL = `yourApiDomain.com/apiPath/` // TODO add api path

export const api = Axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})
