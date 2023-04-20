export interface Stocks {
  buy_sum_count: string
  company_code: string
  company_name: string
  count: number
  country: Country
  country_id: number
  created_at: string
  desc: string
  diluted_eps: number
  ebitda: number
  growth_eps: number
  id: number
  image: string
  market_cap: number
  name: string
  net_profit_margin: number
  p_e: number
  p_s: number
  price: Price
  real_count: number
  revenue_growth: number
  updated_at: string
}

export interface Country {
  created_at: string
  id: 1
  image: string
  name: string
  short_name: string
  updated_at: string
}

export interface Price {
  created_at: string
  id: number
  percentage: number
  price: number
  stock_id: number
  updated_at: string
}

export interface StockState {
  current_page: number
  data: Stocks[] | null
  first_page_url: string | null
  from: number | null
  last_page: number | null
  last_page_url: string | null
  links: string | null
  next_page_url: null
  path: string | null
  per_page: number | null
  prev_page_url: null
  to: number | null
  total: number
}

export interface getStockResponse {
  data: StockState
  messge: string
  status: string
}
export interface StocksList {
  stocks: Stocks[]
}
