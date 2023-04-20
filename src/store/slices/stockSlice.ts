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
  total: 0,
  data: null,
  prev_page_url: null,
}

const stockSlice = createSlice({
  name: 'stockSlice',
  initialState,
  reducers: {
    getStockResponse: (state, action) => {
      state.current_page = action.payload.current_page
      state.first_page_url = action.payload.first_page_url
      state.to = action.payload.to
      state.per_page = action.payload.per_page
      state.from = action.payload.from
      state.last_page = action.payload.last_page
      state.links = action.payload.links
      state.path = action.payload.path
      state.last_page_url = action.payload.last_page_url
      state.next_page_url = action.payload.next_page_url
      state.total = action.payload.total
      state.total = action.payload.total
      state.data = action.payload.data
      state.prev_page_url = action.payload.prev_page_url
    },
  },
})

export const { getStockResponse } = stockSlice.actions

export default stockSlice.reducer
