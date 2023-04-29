import { FC } from 'react'

import { StockHorizonCard, Button, Loading } from 'components'

import { useAppSelector } from 'shared/hooks/redux'

import { checkUser } from 'shared/helpers/checkUser'

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
  const user = useAppSelector(state => state.user.user)
  const app = useAppSelector(state => state.app)

  const onAddBuyStock = () => {
    if (checkUser(user)) {
      onBuyStock()
    }
  }

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

      <Button onClick={onAddBuyStock} className={s.button}>
        {app.loading ? <Loading /> : 'Köp aktier'}
      </Button>
    </section>
  )
}
