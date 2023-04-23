import { useState, useEffect } from 'react'

import { Balance } from 'components'
import { StockSection } from 'features'

import { getMyStocksRequested } from 'shared/api/routes/stock'
import { useAppSelector } from 'shared/hooks/redux'

import { Stocks } from 'shared/types/stocks'

import s from './myStocks.module.scss'

export const MyStocks = () => {
  const [myStocks, setMyStocks] = useState<Stocks[] | []>([])
  const user = useAppSelector(state => state.user.user)

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
        <div className={s.userInfo}>
          <Balance count={user?.balance} currency={'SEK'} title={'Saldo'} />

          <Balance
            count={user?.balance}
            currency={'SEK'}
            title={'Avkastning'}
          />

          <Balance
            count={user?.balance}
            currency={'bbb'}
            title={'Rangordning'}
          />
        </div>

        {myStocks?.length ? <StockSection stocks={myStocks} /> : null}
      </div>
    </div>
  )
}
