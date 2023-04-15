import Axios from 'axios'
import { cookies } from '../utils/Cookies'

export * from './endpoints'

export const BASE_URL = 'https://api.xn--brsjakten-07a.se'

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc3RvY2sueWFyYmVrLnV6L2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNjgxNDEwNTQ4LCJleHAiOjE2ODIwMTUzNDgsIm5iZiI6MTY4MTQxMDU0OCwianRpIjoiRE45REV5NU9CczFjaTdpcyIsInN1YiI6IjE1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.bnKRTBLt0kcEl8cIyXOYvDgG8Aum1fePKH_kGBdpS3I"


export const api = Axios.create({
  baseURL: BASE_URL + '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

