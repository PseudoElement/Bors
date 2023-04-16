import { FC } from 'react'

import Image from 'next/image'

import { Stocks } from 'shared/types/stocks'

import s from './buyStockItem.module.scss'

export const BuyStockItem: FC<Stocks> = ({
  id,
  image,
  count,
  real_count,
  updated_at,
  buy_sum_count,
  created_at,
  p_e,
  p_s,
  price,
  company_name,
  name,
  company_code,
  country,
  country_id,
}) => {
  return (
    <div className={s.buystockItem}>
      <div className={s.buystockWrapper}>
        <div className={s.buystockRow}>
          <div>
            <Image width={40} height={40} src={image} alt='Icon' />
          </div>
          <div>
            <h5 className={s.buystockTitle}>{company_name}</h5>
            <span className={s.buystockInitials}>{company_code}</span>
          </div>
        </div>
        <div>
          <span className={s.buystockStoks}>{count} aktier</span>
          <p className={s.buystockCurrency}>{price.price} sek</p>
        </div>
      </div>
    </div>
  )
}
