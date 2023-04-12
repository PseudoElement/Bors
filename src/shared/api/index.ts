import Axios from 'axios'

export * from './endpoints'

export const BASE_URL = 'https://stock.yarbek.uz'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc3RvY2sueWFyYmVrLnV6L2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNjgxMzI1MjgzLCJleHAiOjE2ODE5MzAwODMsIm5iZiI6MTY4MTMyNTI4MywianRpIjoielpvSzJOUkxSUGdxczNDQiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Um6SACxHDu13rLGZzTU_OmXvc0Wq4r2zLlknTsCSZ6Y'

export const api = Axios.create({
  baseURL: BASE_URL + '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
