import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { mock__stock_pages } from 'shared/mocks/mock_stockCard'
import { StockState, Stocks } from 'shared/types/stocks'

interface StocksTypes {
  params: StockState
  data: Stocks[] | null
}

const initialState: StocksTypes = {
  params: mock__stock_pages,
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
