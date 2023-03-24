import { FC } from 'react'
import Image from 'next/image'

import { Stocks } from 'shared/types/stocks'

import UpArrow from '/public/assets/image/ArrowUp.svg'

import cls from 'classnames'
import s from './stocksCard.module.scss'

interface StocksCardProps extends Stocks {
  onClick?: () => void
}

export const StocksCard: FC<StocksCardProps> = ({
  id,
  image,
  appName,
  appInitials,
  currency,
  uppedPercent,
  onClick,
  count,
}) => {
  return (
    <div className={cls(s.card, count > 0 ? s.addedItem : '')}>
        <div className={s.image}>
          <Image src={image} width={56} height={56} alt='amazon logo' />
        </div>

        <div className={s.appName}>
          <span className={s.name}>{appName}</span>
          <span className={s.initials}>{appInitials}</span>
        </div>

        <div className={s.statistics}>
          <span className={s.currency}>
            {currency} <span>SEK</span>
          </span>
          <span className={s.percent}>
            {' '}
            <UpArrow /> +{uppedPercent}%
          </span>
        </div>

        <div className={s.buy}>
          <span className={s.buyBtn} onClick={onClick}>
            Buy
          </span>
          <span className={s.buyText}>Available stock 824</span>
        </div>
    </div>
  )
}
