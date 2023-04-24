import { StockFilters } from 'shared/types/stocks'
import { stockAll } from 'shared/api/routes/stock'


export const getAllStocks = async (filters: StockFilters) => {
  try {
    const { data } = await stockAll(filters)
    return data.data
  } catch (e) {
    console.log(e)
  }
}
