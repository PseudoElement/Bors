import { FC, useState, useEffect } from 'react'
import Image from 'next/image'

import { CardStocksInfo } from 'features'

import Counter from 'components/Counter/Counter'

import { Stocks } from 'shared/types/stocks'

import UpArrow from '/public/assets/image/ArrowUp.svg'

import cn from 'classnames'
import s from './stocksCard.module.scss'

interface StocksCardProps extends Stocks {
  onClick?: () => void
  onShow?: () => void
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
  hasNft,
  onShow
}) => {
  const [isActiveCard, setIsActiveCard] = useState<boolean>(false)

  const [counterValue, setCounterValue] = useState(1)



  const changeCounter = (value: number) => {
    setCounterValue(value)
  }

  const addNft = () => {
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
        {
          isActiveCard ? <Counter min={0} max={10} value={counterValue} onChange={changeCounter} /> :
            <div className={s.buy}>
              <span
                className={s.buyBtn}
                onClick={e => {
                  addNft()
                  e.stopPropagation()
                }}
              >
                {hasNft ? 'buy more' : 'Buy'}
              </span>
              <span className={s.buyText}>Available stock 824</span>
            </div>
        }
      </div>
    </>
  )
}
