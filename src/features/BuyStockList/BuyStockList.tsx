import { FC } from 'react'

import { BuyStockItem } from 'components'

import { Basket } from '../StockSection/StockSection'

import s from './BuyStockList.module.scss'

interface BuyStockListProps {
  basket: Basket[]
}

export const BuyStockList: FC<BuyStockListProps> = ({ basket }) => {
  return (
    <div className={s.popup}>
      <h2 className={s.buystockTitle}>
        Du har framgångsrikt köpt demo aktier i Börsjaktens aktietävling!
      </h2>

      <div className={s.buystockList}>
        {basket.map(stock => (
          <BuyStockItem key={stock.stock.id} {...stock} />
        ))}
      </div>

      <p className={s.buystockDescription}>
        De är tillgängliga på ditt personliga konto på fliken Mina Aktier
      </p>
    </div>
  )
}
