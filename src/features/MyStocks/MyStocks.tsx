import { useState } from 'react'

import { Balance, StocksCard } from 'components'

import { mock_my_stocks } from 'shared/mocks/mock_mySticks'
import { mock_user_balance } from 'shared/mocks/mock_userAccount'
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
  const [userInfo, setUserInfo] = useState<MyStocksInfo>(mock_my_stocks)

  return (
    <div className={s.wrapperStocks}>
      <div className={s.wrapperText}>
        <div className={s.title}>My Stocks</div>
        <div className={s.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </div>
      </div>
      <div className={s.wrapperContent}>
        <div className={s.userInfo}>
          {mock_user_balance.map((item, key) => (
            <Balance {...item} key={key} />
          ))}
        </div>
        <div className={s.userCard}>
          {userInfo.myCard.map((card, idx) => (
            <StocksCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}
