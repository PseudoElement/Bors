import { FC, useState, SyntheticEvent } from 'react'
import Image from 'next/image'
import cn from 'classnames'

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
  const [counterValue, setCounterValue] = useState(0)

  const changeCounter = (value: number) => {
    setCounterValue(value)

    if (value === 0) {
      setIsActiveCard(false)
    }
  }

  const addNft = (e: SyntheticEvent) => {
    e.stopPropagation()
    onClick?.()
    setCounterValue(1)
    setIsActiveCard(true)
  }

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
          <span className={s.name}>
            {company_name ? company_name : 'Undefined'}
          </span>
          <span className={s.initials}>
            {company_code ? company_code : 'Undefined'}
          </span>
        </div>

        <div className={s.statistics}>
          <div className={s.currency}>
            {price?.price ? price.price : <span>Undefined</span>}{' '}
            <span>SEK</span>
          </div>

          <div className={s.percent}>
            {price?.percentage > 0 ? (
              <div className={s.positive}>
                <UpArrow />
                {price?.percentage ? <span>+{price.percentage}</span> : 0}%
              </div>
            ) : (
              <div className={s.negative}>
                <UpArrow />
                {price?.percentage ? <span>-{price.percentage}</span> : 0}%
              </div>
            )}
          </div>
        </div>

        {isActiveCard ? (
          <Counter min={0} value={counterValue} onChange={changeCounter} />
        ) : (
          <div className={s.buy}>
            <button className={s.buyBtn} onClick={e => addNft(e)}>
              {false ? 'Köp mer' : 'Köpa'}
            </button>

            <span className={s.buyText}>Tillgängliga aktier {count}</span>
          </div>
        )}
      </div>
    </>
  )
}
