import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StockState, Stocks } from 'shared/types/stocks'

interface StocksTypes {
  params: StockState
  data: Stocks[] | null
}

const default_stock_params = {
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

const initialState: StocksTypes = {
  params: default_stock_params,
  data: null,
}

const stockSlice = createSlice({
  name: 'stockSlice',
  initialState,
  reducers: {
    setStockParams: (state: StocksTypes, action: PayloadAction<StockState>) => {
      state.params = { ...action.payload, data: null }
    },
    setStockData: (
      state: StocksTypes,
      action: PayloadAction<Stocks[] | null>
    ) => {
      state.data = action.payload
    },
  },
})

export const { setStockParams, setStockData } = stockSlice.actions

export default stockSlice.reducer