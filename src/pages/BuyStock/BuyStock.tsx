import { FC, useEffect } from 'react'

import { Pagination } from 'components'
import { FiltersPanel, StockSection } from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { getAllStocks } from './helpers'
import { setStockData, setStockParams } from 'store/slices/stockSlice'

import {
  mock_min_max_popularity,
  mock_min_max_price,
} from 'shared/mocks/mock_filters'
import { StockFilters } from 'shared/types/stocks'

import s from './buyStock.module.scss'

export const BuyStock: FC = () => {
  const dispatch = useAppDispatch()
  const stocks = useAppSelector(state => state.stock.data)
  const filterParams = useAppSelector(state => state.stock.params)
  const filters: StockFilters = {
    search: '',
    price: mock_min_max_price[0],
    popularity: mock_min_max_popularity[0],
    current_page: filterParams.current_page,
  }

  const getStocks = async (filters: StockFilters) => {
    const data = await getAllStocks(filters)
    if (data) {
      dispatch(setStockData(data.data))
      dispatch(setStockParams(data))
    }
  }

  const handleFilters = (filters: StockFilters) => {
    getStocks(filters)
  }

  useEffect(() => {
    if (!stocks) {
      getStocks(filters)
    }
  }, [])

  return (
    <div className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>Köp aktier</h1>

        <p className={s.pageDescription}>
          Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja eller
          byta ditt innehav under aktietävlingen.
        </p>

        <div className={s.filterWrapper}>
          <FiltersPanel onChange={handleFilters} />
        </div>

        {stocks ? <StockSection stocks={stocks} /> : null}

        <Pagination />
      </div>
    </div>
  )
}
