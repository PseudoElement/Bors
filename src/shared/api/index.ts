import Axios from 'axios'
import { cookies } from '../utils/Cookies'

export * from './endpoints'

export const BASE_URL = 'https://api.xn--brsjakten-07a.se'

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnhuLS1icnNqYWt0ZW4tMDdhLnNlL2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNjgxNjczNDMyLCJleHAiOjE2ODE2NzcwMzIsIm5iZiI6MTY4MTY3MzQzMiwianRpIjoiQUVNRGpVVTl2eGlpMmxqcSIsInN1YiI6IjI5IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.NS4bHEycm9O1WQbouobvPS6blWiyPPPC4cbBBHAKbX8"


export const api = Axios.create({
  baseURL: BASE_URL + '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; multipart/form-data',
    Authorization: `Bearer ${token}`,
  },
})

