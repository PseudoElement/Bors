import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { CardStocksInfo } from 'features'
import { Counter } from 'components'

import { Stocks } from 'shared/types/stocks'
import UpArrow from '/public/assets/image/ArrowUp.svg'

import s from './stocksCard.module.scss'

interface StocksCardProps extends Stocks {
  onClick?: () => void
  onShow?: () => void
}

export const StocksCard: FC<StocksCardProps> = ({
  id,
  image,
  price,
  onShow,
  onClick,
  revenue_growth,
  updated_at,
  created_at,
  name,
  company_name,
  company_code,
  count,
  country,
  desc,
  country_id,
  ebitda,
  p_e,
  p_s,
  diluted_eps,
  growth_eps,
  market_cap,
  net_profit_margin,
  real_count,
  buy_sum_count,
}) => {
  const [isActiveCard, setIsActiveCard] = useState<boolean>(false)
  const [counterValue, setCounterValue] = useState(count)

  const changeCounter = (value: number) => {
    setCounterValue(value)
  }

  const addNft = (e: any) => {
    e.stopPropagation()
    onClick?.()
    setIsActiveCard(prev => !prev)
  }

  useEffect(() => {
    if (counterValue === 0) {
      setCounterValue(1)
      setIsActiveCard(false)
    }
  }, [counterValue])

  return (
    <>
      <div
        onClick={onShow}
        className={cn(s.card, { [s.addedItem]: isActiveCard })}
      >
        <div className={s.image}>
          <Image src={image} width={56} height={56} alt='amazon logo' />
        </div>

        <div className={s.appName}>
          <span className={s.name}>{company_name}</span>
          <span className={s.initials}>{company_code}</span>
        </div>

        <div className={s.statistics}>
          <span className={s.currency}>
            {price?.price} <span>SEK</span>
          </span>
          <span className={s.percent}>
            {' '}
            <UpArrow /> +{price?.percentage}%
          </span>
        </div>

        {isActiveCard ? (
          <Counter
            min={0}
            value={counterValue}
            onChange={changeCounter}
          />
        ) : (
          <div className={s.buy}>
            <button className={s.buyBtn} onClick={e => addNft(e)}>
              {false ? 'Köp mer' : 'Köpa'}
            </button>

            <span className={s.buyText}>Tillgängliga aktier 824</span>
          </div>
        )}
      </div>
    </>
  )
}
