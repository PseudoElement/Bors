import { FC } from 'react'
import { Button, BuyStockItem } from 'components'

import { StocksList } from 'shared/types/stocks'

import s from './BuyStockList.module.scss'

export const BuyStockList: FC<StocksList> = ({ stocks }) => {
  return (
    <div>
      <h2 className={s.buystockTitle}>You have successfully bought shares!</h2>
      <div className={s.buystockList}>
        {stocks.map(stock => <BuyStockItem key={stock.id} {...stock} />)}
      </div>
      <p className={s.buystockDescription}>
        They are available in your personal account on the My stoks tab
      </p>
      <Button className={s.buystockBtn}>
        Confirm
      </Button>
    </div>
  )
}
