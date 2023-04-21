import { FC } from 'react'
import { Swiper } from 'swiper/react'
import { StockHorizonCard, Button } from 'components'

import { StocksList } from 'shared/types/stocks'

import s from './BottomBuySection.module.scss'

interface BottomBuySectionProps extends StocksList {
  onClose: () => void
  onClick: (id: number) => void
}

export const BottomBuySection: FC<BottomBuySectionProps> = ({
  stocks,
  onClose,
  onClick,
}) => {
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
      <Button onClick={onClose} className={s.button}>
        Köp aktier
      </Button>
    </section>
  )
}
