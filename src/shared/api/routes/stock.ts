import { AxiosPromise } from 'axios'
import { api, endpoints_stock } from '../index'
import { getStockResponse } from '../../types/stocks'

export const stockAll = (): AxiosPromise<getStockResponse> => {
  return api.get(endpoints_stock.stock_all)
}
