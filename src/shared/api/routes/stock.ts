import { AxiosPromise } from 'axios'
import { api, endpoints_stock } from '../index'
import { getStockResponse, Stocks } from '../../types/stocks'

export const stockAll = (): AxiosPromise<getStockResponse> => {
  return api.get(endpoints_stock.stock_all)
}

export const getMyStocksRequested = (): AxiosPromise => {
  return api.get(endpoints_stock.stock_my)
}

export const buyStocks = (stocks: any): AxiosPromise => {
  console.log(stocks)
  return api.post(endpoints_stock.stock_buy, stocks)
}

export const detailStock = (id: number): AxiosPromise => {
  return api.get(endpoints_stock.stock_id(id))
}
