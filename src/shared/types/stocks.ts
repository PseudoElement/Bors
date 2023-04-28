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
  last_price: Price
  market_cap: number
  name: string
  net_profit_margin: number
  p_e: number
  p_s: number
  price: number
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

export interface getStockResponse {
  data: StocksResponse
  messge: string
  status: string
}

export interface StocksResponse {
  current_page: number
  data: Stocks[] | null
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: string
  next_page_url: null
  path: string
  per_page: number
  prev_page_url: null
  to: number
  total: number
}

export interface StockTypesPrivot {
  stock_id: number
  stock_types_id: number
}

export interface StockTypes {
  id: number
  name: string
  updated_at: string
  created_at: string
  privot: StockTypesPrivot
}

export type FilterMeta = { label: string; value: MinMax | string }

export enum MinMax {
  'Default' = 'asc',
  'Mest' = 'asc',
  'Minst' = 'desc',
}

export interface StockFilters {
  price: FilterMeta
  popularity: FilterMeta
  search: string
}

export interface StockPagination {
  current_page: number
  per_page: number
}

export interface Params {
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: string
  next_page_url: null
  path: string
  per_page: number
  prev_page_url: null
  to: number
  total: number
  price: FilterMeta
  popularity: FilterMeta
  search: string
}
