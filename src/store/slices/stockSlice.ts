import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StockState, Stocks } from 'shared/types/stocks'

interface StocksTypes {
  params: StockState | null
  data: Stocks[] | null
}

const initialState: StocksTypes = {
  params: null,
  data: null,
}

const stockSlice = createSlice({
  name: 'stockSlice',
  initialState,
  reducers: {
    setStockParams: (state: StocksTypes, action: PayloadAction<StockState>) => {
      state.params = action.payload
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
