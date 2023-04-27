import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  Stocks,
  StockFilters,
  StocksResponse,
  StockPagination,
} from 'shared/types/stocks'
import {
  mock_min_max_popularity,
  mock_min_max_price,
} from 'shared/mocks/mock_filters'

const default_stock_params: StocksResponse = {
  data: null,
  first_page_url: '',
  from: 0,
  last_page_url: '',
  links: '',
  next_page_url: null,
  path: '',
  prev_page_url: null,
  to: 0,
  last_page: 0,
  per_page: 24,
  current_page: 1,
  total: 0,
}

const default_stock_filters: StockFilters = {
  search: '',
  price: mock_min_max_price[0],
  popularity: mock_min_max_popularity[0],
}

export interface StocksState {
  params: StocksResponse
  filters: StockFilters
  data: Stocks[] | null
  request: boolean
}

const initialState: StocksState = {
  params: default_stock_params,
  data: null,
  filters: default_stock_filters,
  request: false,
}

const stockSlice = createSlice({
  name: 'stockSlice',
  initialState,
  reducers: {
    setStockData: (
      state: StocksState,
      action: PayloadAction<StocksResponse>
    ) => {
      state.data = action.payload.data
      state.params = action.payload
      state.request = false
    },
    setStockFilters: (
      state: StocksState,
      action: PayloadAction<StockFilters>
    ) => {
      state.request = true
      state.filters.search = action.payload.search
      state.filters.price = action.payload.price
      state.filters.popularity = action.payload.popularity
    },
    setStockPagination: (
      state: StocksState,
      action: PayloadAction<StockPagination>
    ) => {
      state.request = true
      state.params.current_page = action.payload.current_page
      state.params.per_page = action.payload.per_page
    },
  },
})

export const { setStockData, setStockFilters, setStockPagination } =
  stockSlice.actions

export default stockSlice.reducer
