import { FC } from 'react'

import { Percent } from 'components'

import {toFixedCount} from "../../shared/helpers/countToBuy";

import s from './Balance.module.scss'

export interface BalanceProps {
  title: string
  count?: number
  currency?: string
  profit?: number
  currencyPosition?: 'left' | 'right'
}

export const Balance: FC<BalanceProps> = ({
  title,
  count,
  currency,
  profit,
  currencyPosition = 'right',
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{title}</div>

      <div className={s.wrapperContent}>
        <div className={s.content}>
          {currencyPosition === 'left' ? (
            <div className={s.currency}>{currency}</div>
          ) : null}

          <div>{toFixedCount(count)}</div>

          {currencyPosition === 'right' ? (
            <div className={s.currency}>{currency}</div>
          ) : null}
        </div>

        <div className={s.percent}>
          {profit !== undefined ? <Percent count={profit} /> : null}
        </div>
      </div>
    </div>
  )
}
