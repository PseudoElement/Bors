import { createSlice } from '@reduxjs/toolkit'
import { StockState } from 'shared/types/stocks'

const initialState: StockState = {
  current_page: 1,
  first_page_url: null,
  to: null,
  per_page: null,
  from: null,
  last_page: null,
  links: null,
  path: null,
  last_page_url: null,
  next_page_url: null,
  total: null,
  data: null,
  prev_page_url: null,
}

const stockSlice = createSlice({
  name: 'stockSlice',
  initialState,
  reducers: {
    getStockResponse: (state, action) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getStockResponse } = stockSlice.actions

export default stockSlice.reducer
