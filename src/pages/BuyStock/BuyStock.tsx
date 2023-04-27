import { FC, useEffect } from 'react'

import { FiltersPanel, StockSection } from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { setStockData } from 'store/slices/stockSlice'
import { stockAll } from 'shared/api/routes/stock'

import { Params } from 'shared/types/stocks'

import s from './buyStock.module.scss'

export const BuyStock: FC = () => {
  const dispatch = useAppDispatch()
  const { request, params, data, filters } = useAppSelector(
    state => state.stock
  )

  const getStocks = async (params: Params) => {
    try {
      const { data } = await stockAll(params)
      if (data?.status === 'success') {
        dispatch(setStockData(data.data))
      }
      throw new Error(data.messge)
    } catch (e) {
      // TODO
      // console.log(e)
    }
  }

  useEffect(() => {
    if (request) {
      getStocks({ ...filters, ...params })
    }
  }, [request])

  return (
    <div className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>Köp aktier</h1>

        <p className={s.pageDescription}>
          Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja eller
          byta ditt innehav under aktietävlingen.
        </p>

        <div className={s.filterWrapper}>
          <FiltersPanel />
        </div>

        {data ? <StockSection stocks={data} /> : null}
      </div>
    </div>
  )
}
