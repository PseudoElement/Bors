import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Balance, StocksCard } from 'components'

import { mock_my_stocks } from 'shared/mocks/mock_mySticks'
import { mock_user_balance } from 'shared/mocks/mock_userAccount'

import { myStocks, stockAll } from 'shared/api/routes/stock'

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
          Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja eller byta ditt innehav under aktietävlingen.
        </div>
      </div>
      <div className={s.wrapperContent}>
        <div className={s.userInfo}>
          {mock_user_balance.map((item, key) => (
            <Balance {...item} key={key} />
          ))}
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
