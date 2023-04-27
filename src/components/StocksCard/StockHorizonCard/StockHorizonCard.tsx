import React from 'react'
import { FC } from 'react'
import Image from 'next/image'

import { countToBuy } from 'shared/helpers/countToBuy'

import { Stocks } from 'shared/types/stocks'

import s from './StockHorizonCard.module.scss'

interface StockHorizonCardProps extends Stocks {
  onClick?: (id: number) => void
  buy: any
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
  buy,
    last_price
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
          <span className={s.stockCostValue}>1 aktier</span>

          <h5 className={s.stockCost}>
            {last_price? last_price.price : price} <span>SEK</span>
          </h5>
        </div>
      )}

      <div className={s.stockSumWrapper}>
        <span className={s.stockCostValue}>
          {countToBuy(Object.values(buy)[0]).buyCount} aktier
        </span>

        <h5 className={s.stockCost}>
          {countToBuy(Object.values(buy)[0], last_price? last_price.price : price).commonPrice}{' '}
          <span>SEK</span>
        </h5>
      </div>

      {onClick && (
        <button className={s.cancelBtn} onClick={() => onClick(id)}>
          <Image
            src='/assets/icons/cancel-button.svg'
            width={20}
            height={20}
            alt={'cancel'}
          />
        </button>
      )}
    </div>
  )
}
