import { useState, useEffect } from 'react'

import { BalancePanel, StockSection } from 'features'

import { getMyStocksRequested } from 'shared/api/routes/stock'

import { Stocks } from 'shared/types/stocks'

import s from './myStocks.module.scss'

export const MyStocks = () => {
  const [myStocks, setMyStocks] = useState<Stocks[] | []>([])

  const getMyStocks = async () => {
    try {
      const { data } = await getMyStocksRequested()
      setMyStocks(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMyStocks()
  }, [])

  return (
    <div className={s.wrapperStocks}>
      <div className={s.wrapperText}>
        <div className={s.title}>Mina aktier</div>

        <div className={s.subtitle}>
          Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja eller
          byta ditt innehav under aktietävlingen.
        </div>
      </div>

      <div className={s.wrapperContent}>
        <BalancePanel />

        {myStocks?.length ? <StockSection stocks={myStocks} /> : null}
      </div>
    </div>
  )
}
