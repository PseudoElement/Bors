import { FC } from 'react'

import Image from 'next/image'

import { countToBuy } from 'shared/helpers/countToBuy'

import { Basket } from 'features/StockSection/StockSection'

import s from './buyStockItem.module.scss'

export const BuyStockItem: FC<Basket> = ({ buy, stock }) => {
  return (
    <div className={s.buystockItem}>
      <div className={s.buystockWrapper}>
        <div className={s.buystockRow}>
          <div className={s.cardLogo}>
            <Image width={40} height={40} src={stock?.image} alt='Icon' />
          </div>

          <div>
            <h5 className={s.buystockTitle}>{stock?.company_name}</h5>
            <span className={s.buystockInitials}>{stock?.company_code}</span>
          </div>
        </div>

        <div>
          <span className={s.buystockStoks}>
            {countToBuy(Object.values(buy)[0]).buyCount} aktier
          </span>

          <p className={s.buystockCurrency}>
            {
              countToBuy(
                Object.values(buy)[0],
                stock?.last_price ? stock?.last_price?.price : stock?.price
              ).commonPrice
            }{' '}
            sek
          </p>
        </div>
      </div>
    </div>
  )
}
