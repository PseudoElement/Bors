import { FC } from 'react'
import Image from 'next/image'

import { BalanceProps } from 'shared/types/balance'

import s from './Balance.module.scss'

export const Balance: FC<BalanceProps> = ({
  title,
  count,
  currency,
  profit,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperContent}>
        <span className={s.title}>{title}</span>
        <div className={s.content}>
          {title === 'rating' && '№'} {count}
          {currency && <span className={s.currency}>{currency}</span>}
          {profit && (
            <div className={s.imageProfit}>
              <Image
                src='/assets/icons/ArrowUp.svg'
                width={24}
                height={18}
                alt='arrow up'
              />
              <span className={s.textProfit}>{profit}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
