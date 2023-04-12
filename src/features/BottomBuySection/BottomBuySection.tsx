import { FC } from 'react'

import { StockHorizonCard, Button } from 'components'

import { StocksList } from 'shared/types/stocks'

import s from './BottomBuySection.module.scss'

interface BottomBuySectionProps extends StocksList {
  onClose: () => void
}

export const BottomBuySection: FC<BottomBuySectionProps> = ({
  stocks,
  onClose,
}) => {
  const dataCall = (index: number) => {
    return {
      ...stocks[index],
      onClick: () => {},
      exchangeCurrency: 'SET',
    }
  }

  return (
    <section className={s.section}>
      <div className={s.cards}>
        {stocks.map((stock, index) => (
          <StockHorizonCard {...dataCall(index)} key={index} />
        ))}
      </div>
      <Button onClick={onClose} className={s.button}>
        Buy Stock
      </Button>
    </section>
  )
}
