import { FC } from 'react'

import { Button, BuyStockItem } from 'components'

import { StocksList } from 'shared/types/stocks'

import s from './BuyStockList.module.scss'

interface BuyStockListProps extends StocksList {
  onClick?: () => void
}

export const BuyStockList: FC<BuyStockListProps> = ({ stocks, onClick }) => {

  return (
    <div className={s.popup}>
      <h2 className={s.buystockTitle}>Du har framgångsrikt köpt demo aktier i Börsjaktens aktietävling!</h2>

      <div className={s.buystockList}>
        {stocks.map(stock => (
          <BuyStockItem key={stock.id} {...stock} />
        ))}
      </div>

      <p className={s.buystockDescription}>
        De är tillgängliga på ditt personliga konto på fliken Mina Aktier
      </p>

      <Button onClick={onClick} className={s.buystockBtn}>Bekräfta</Button>
    </div>
  )
}
