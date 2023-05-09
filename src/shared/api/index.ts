import Axios from 'axios'
import { store } from 'store'
import {
  setAppError,
  setAppLoading,
  setAppSuccess,
} from 'store/slices/appSlice'

export * from './endpoints'

export const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  function (config) {
    store.dispatch(setAppLoading(true))

    return config
  },
  function (error) {
    store.dispatch(setAppLoading(false))
    return error
  }
)

api.interceptors.response.use(
  function (response) {
    store.dispatch(setAppLoading(false))

    if (response.config.method !== 'get') {
      store.dispatch(setAppSuccess(response.data.messge))
    }
    return response
  },
  function (error) {
    store.dispatch(setAppLoading(false))
    console.log(error)
    const errorPath = error.response?.data.data?.error || null
    let errorMessage = ''

    if (errorPath) {
      for (let err in errorPath) {
        errorMessage += errorPath[err] + '\n'
      }
    }

    store.dispatch(
      setAppError(
        errorMessage ||
          error.response?.data.message ||
          error.response?.data.messge ||
          error.message
      )
    )
    return error
  }
)
