import Axios from 'axios'

export * from './endpoints'

export const BASE_URL = 'https://stock.yarbek.uz'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc3RvY2sueWFyYmVrLnV6L2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNjgxMjg5Mjg3LCJleHAiOjE2ODE4OTQwODcsIm5iZiI6MTY4MTI4OTI4NywianRpIjoiaFg4UW9BanB4SVhOY2U1OSIsInN1YiI6IjE1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.WnyEbImj4aHNUDu99zD2aARkDAUQYN6YW-dusXjV4Qw'

export const api = Axios.create({
  baseURL: BASE_URL + '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${token}`,
  },
})

