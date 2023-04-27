import { AxiosPromise } from 'axios'
import { api, endpoints_stock } from '../index'
import { getStockResponse, Params } from '../../types/stocks'

export const stockAll = (params: Params): AxiosPromise<getStockResponse> => {
  return api.get(endpoints_stock.stock_all(params))
}

export const getMyStocksRequested = (): AxiosPromise => {
  return api.get(endpoints_stock.stock_my)
}

export const buyStocks = (stocks: any): AxiosPromise => {
  return api.post(endpoints_stock.stock_buy, stocks)
}

export const detailStock = (id: number): AxiosPromise => {
  return api.get(endpoints_stock.stock_id(id))
}
