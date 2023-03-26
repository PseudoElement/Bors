import { StocksCard } from 'components'
import { useState } from 'react'
import { mock_my_stocks } from 'shared/mocks/mock_mySticks'
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
          <div className={s.userBalance}>
            <span className={s.titleInfo}>Balance</span>
            <div className={s.info}>
              {userInfo.balance}
              <span className={s.currency}>{userInfo.currency}</span>
            </div>
          </div>
          <div className={s.userProfitablity}>
            <span className={s.titleInfo}>profitability</span>
            <div className={s.info}>
              {userInfo.profitability}
              <span className={s.currency}>{userInfo.currency}</span>
            </div>
          </div>
          <div className={s.userRating}>
            <span className={s.titleInfo}>Rating</span>
            <div className={s.info}>№{userInfo.rating}</div>
          </div>
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
