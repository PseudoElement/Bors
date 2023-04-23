import { FC } from 'react'
import { StockHorizonCard, Button } from 'components'
import { Loading } from 'components/Loading/Loading'

import { useAppSelector } from 'shared/hooks/redux'

import { Basket } from '../StockSection/StockSection'

import s from './BottomBuySection.module.scss'

interface BottomBuySectionProps {
  onClick: (id: number) => void
  onBuyStock: () => void
  basket: Basket[]
}

export const BottomBuySection: FC<BottomBuySectionProps> = ({
  basket,
  onBuyStock,
  onClick,
}) => {
  const app = useAppSelector(state => state.app)

  return (
    <section className={s.section}>
      {basket?.length ? (
        <div className={s.cards}>
          {basket.map((stock, index) => (
            <StockHorizonCard
              {...stock.stock}
              buy={stock.buy}
              key={index}
              onClick={onClick}
            />
          ))}
        </div>
      ) : null}

      <Button onClick={onBuyStock} className={s.button}>
        {app.loading ? <Loading /> : 'Köp aktier'}
      </Button>
    </section>
  )
}
