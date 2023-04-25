import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StockState, Stocks, StockFilters } from 'shared/types/stocks'
import {
  mock_min_max_popularity,
  mock_min_max_price,
} from '../../shared/mocks/mock_filters'

interface StocksTypes {
  params: StockState
  filters: StockFilters
  data: Stocks[] | null
}

const default_stock_params: StockState = {
  current_page: 1,
  data: null,
  first_page_url: '',
  from: 0,
  last_page: 0,
  last_page_url: null,
  links: '',
  next_page_url: null,
  path: '',
  per_page: 0,
  prev_page_url: null,
  to: 0,
  total: 0,
}

const default_stock_filters: StockFilters = {
  current_page: 1,
  search: '',
  price: mock_min_max_price[0],
  popularity: mock_min_max_popularity[0],
}

const initialState: StocksTypes = {
  params: default_stock_params,
  data: null,
  filters: default_stock_filters,
}

const stockSlice = createSlice({
  name: 'stockSlice',
  initialState,
  reducers: {
    setStockParams: (state: StocksTypes, action: PayloadAction<StockState>) => {
      state.params = { ...action.payload, data: null }
      state.filters.current_page = action.payload.current_page
    },

    setStockFilters: (
      state: StocksTypes,
      action: PayloadAction<StockFilters>
    ) => {
      state.filters = action.payload
    },
    setStockData: (
      state: StocksTypes,
      action: PayloadAction<Stocks[] | null>
    ) => {
      state.data = action.payload
    },
  },
})

export const { setStockParams, setStockData, setStockFilters } =
  stockSlice.actions

export default stockSlice.reducer
