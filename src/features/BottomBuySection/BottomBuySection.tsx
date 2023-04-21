import { FC } from 'react'
import { Swiper } from 'swiper/react'
import { StockHorizonCard, Button } from 'components'

import { StocksList } from 'shared/types/stocks'

import s from './BottomBuySection.module.scss'
import { useAppSelector } from 'shared/hooks/redux'
import { Loading } from 'components/Loading/Loading'

interface BottomBuySectionProps extends StocksList {
  onClick: (id: number) => void
  buyStock: () => void
}

export const BottomBuySection: FC<BottomBuySectionProps> = ({
  stocks,
  buyStock,
  onClick,
}) => {
  const app = useAppSelector(state => state.app)
  const dataCall = (index: number) => {
    return {
      ...stocks[index],
      onClick: () => console.log(123),
      exchangeCurrency: 'SET',
    }
  }

  return (
    <section className={s.section}>
      <div className={s.cards}>
        {stocks.map((stock, index) => (
          <StockHorizonCard
            {...dataCall(index)}
            key={index}
            onClick={onClick}
          />
        ))}
      </div>
      <Button onClick={buyStock} className={s.button}>
        {app.loading ? <Loading /> : 'Köp aktier'}
      </Button>
    </section>
  )
}
