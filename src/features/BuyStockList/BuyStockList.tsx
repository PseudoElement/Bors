import { FC } from 'react'

import { Button, BuyStockItem } from 'components'

import { StocksList } from 'shared/types/stocks'

import s from './BuyStockList.module.scss'

export const BuyStockList: FC<StocksList> = ({ stocks }) => {
  return (
    <div>
      <h2 className={s.buystockTitle}>Du har framgångsrikt köpt demo aktier i Börsjaktens aktietävling!</h2>

      <div className={s.buystockList}>
        {stocks.map(stock => (
          <BuyStockItem key={stock.id} {...stock} />
        ))}
      </div>

      <p className={s.buystockDescription}>
        De är tillgängliga på ditt personliga konto på fliken Mina Aktier
      </p>

      <Button className={s.buystockBtn}>Bekräfta</Button>
    </div>
  )
}
