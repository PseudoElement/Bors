import { FC, useState, SyntheticEvent, useEffect } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { Counter, Percent } from 'components'

import { Stocks } from 'shared/types/stocks'
import { Basket } from 'features/StockSection/StockSection'

import s from './stocksCard.module.scss'

interface StocksCardProps {
  onAddToBasket?: (value: Basket) => void
  onShow?: () => void
  basket: Basket[]
  stock: Stocks
  myStocks?: boolean
}

export const StocksCard: FC<StocksCardProps> = ({
  onShow,
  onAddToBasket,
  basket,
  stock,
  myStocks,
}) => {
  const [isActiveCard, setIsActiveCard] = useState<boolean>(false)
  const [counterValue, setCounterValue] = useState<number>(0)

  const changeCounter = (value: number) => {
    setCounterValue(value)
    onAddToBasket?.({ stock: stock, buy: { [`${stock.id}`]: value } })

    if (value === 0) {
      setIsActiveCard(false)
    }
  }

  const addNft = (e: SyntheticEvent) => {
    e.stopPropagation()

    onAddToBasket?.({ stock: stock, buy: { [`${stock?.id}`]: 1 } })
    setCounterValue(1)
  }

  useEffect(() => {
    if (
      basket.find(item => Object.keys(item.buy)[0] === stock?.id.toString())
    ) {
      setIsActiveCard(true)
    } else {
      setIsActiveCard(false)
    }
  }, [basket])

  return (
    <div
      onClick={onShow}
      className={cn(s.card, { [s.addedItem]: isActiveCard })}
    >
      <div className={s.image}>
        <div
          className={s.companyLogo}
          style={{ backgroundImage: `url("${stock?.image}")` }}
        ></div>
      </div>

      <div className={s.appName}>
        <span className={s.name}>
          {stock?.company_name ? stock?.company_name : null}
        </span>
        <span className={s.initials}>
          {stock?.company_code ? stock?.company_code : null}
        </span>
      </div>

      <div className={s.statistics}>
        {myStocks && (
          <span className={s.myStocks}>Antal aktier {stock?.buy_count}</span>
        )}

        <div className={s.priceWrap}>
          <div className={s.currency}>
            {stock.last_price ? stock.last_price.price : stock.price}
            <span>SEK</span>
          </div>

          <Percent count={stock?.last_price?.percentage} />
        </div>
      </div>

      <div className={s.cardFooter}>
        {isActiveCard ? (
          <Counter min={0} value={counterValue} onChange={changeCounter} />
        ) : (
          <div className={s.buy}>
            <button className={s.buyBtn} onClick={e => addNft(e)}>
              {myStocks ? 'Köp mer' : 'Köpa'}
            </button>

            <span className={s.buyText}>
              Tillgängliga aktier {stock?.count}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
