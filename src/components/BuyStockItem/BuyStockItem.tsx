import { FC } from 'react'

import Image from 'next/image'

import { Stocks } from 'shared/types/stocks'

import s from './buyStockItem.module.scss'

export const BuyStockItem: FC<Stocks> = ({ id, appName, currency, count, uppedPercent, appInitials, image }) => {
  return (
    <div className={s.buystockItem}>
      <div className={s.buystockWrapper}>
        <div className={s.buystockRow}>
          <div>
            <Image width={40} height={40} src={image} alt='Icon' />
          </div>
          <div>
            <h5 className={s.buystockTitle}>{appName}</h5>
            <span className={s.buystockInitials}>{appInitials}</span>
          </div>
        </div>
        <div>
          <span className={s.buystockStoks}>{count} stoks</span>
          <p className={s.buystockCurrency}>{currency} sek</p>
        </div>
      </div>
    </div>
  )
}
