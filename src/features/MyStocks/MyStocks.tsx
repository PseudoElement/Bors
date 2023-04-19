import { useState, useEffect } from 'react'
import { Balance, StocksCard } from 'components'

import { mock_my_stocks } from 'shared/mocks/mock_mySticks'

import { myStocks, stockAll } from 'shared/api/routes/stock'
import { useAppSelector } from 'shared/hooks/redux'

import { Stocks } from 'shared/types/stocks'

import s from './myStocks.module.scss'

export interface MyStocksInfo {
  balance: string
  profitability: string
  rating: number
  currency: string
  myCard: Stocks[]
}

export const MyStocks = () => {
  const [userInfo, setUserInfo] = useState<MyStocksInfo | null>(null)
  const user = useAppSelector(state => state.user.user)

  const getMyStocks = async () => {
    try {
      const response = await myStocks()
      console.log(response.data)
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

        <div className={s.userCard}>
          {userInfo?.myCard.map((card, idx) => (
            <StocksCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}
