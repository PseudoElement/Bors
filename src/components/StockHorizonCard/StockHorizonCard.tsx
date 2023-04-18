import React from 'react'
import { FC } from 'react'
import Image from 'next/image'

import { Stocks } from 'shared/types/stocks'

import s from './StockHorizonCard.module.scss'

interface StockHorizonCardProps extends Stocks {
  onClick?: (id: number) => void
  exchangeCurrency?: string
}

export const StockHorizonCard: FC<StockHorizonCardProps> = ({
  id,
  image,
  p_s,
  p_e,
  count,
  real_count,
  buy_sum_count,
  company_code,
  company_name,
  name,
  net_profit_margin,
  market_cap,
  growth_eps,
  diluted_eps,
  ebitda,
  revenue_growth,
  desc,
  country,
  country_id,
  created_at,
  updated_at,
  price,
  onClick,
  exchangeCurrency,
}) => {
  return (
    <div className={s.stockCard} key={id}>
      <div className={s.stockNameBlock}>
        <div className={s.stockNameBlockImageWrapper}>
          <Image src={image} width={40} height={40} alt={'stock card image'} />
        </div>

        <div className={s.stockNameBlockTextWrapper}>
          <h5>{company_name}</h5>
          <span>{company_code}</span>
        </div>
      </div>

      {onClick && (
        <div className={s.stockCostWrapper}>
          <span className={s.stockCostValue}>1 stocks</span>

          <h5 className={s.stockCost}>
            {price.price}

            <span className={s.exchangeCurrency}>
              {exchangeCurrency || 'SET'}
            </span>
          </h5>
        </div>
      )}

      <div className={s.stockSumWrapper}>
        <span className={s.stockCostValue}>{count} stocks</span>

        <h5 className={s.stockCost}>
          {count * price.price}

          <span className={s.exchangeCurrency}>
            {exchangeCurrency || 'SET'}
          </span>
        </h5>
      </div>

      {onClick && (
        <div className={s.cancelBtn}>
          <button onClick={() => onClick(id)}>
            <Image
              src='/assets/icons/cancel-button.svg'
              width={20}
              height={20}
              alt={'cancel'}
            />
          </button>
        </div>
      )}
    </div>
  )
}
