import React from 'react'
import { FC } from 'react'
import Image from 'next/image'

import s from './horizonCard.module.scss'

export const HorizonCard: FC<{
  id: number
  image: string
  appName: string
  appInitials: string
  currency: string | number
  uppedPercent: string
  count: number
}> = (
  { id, image, appName, appInitials, currency, count },
  onClick?: () => void,
  exchangeCurrency?: string
) => {
  return (
    <div className={s.stockCard} key={id}>
      <div className={s.stockNameBlock}>
        <div className={s.stockNameBlockImageWrapper}>
          <Image src={image} width={40} height={40} alt={'stock card image'} />
        </div>
        <div className={s.stockNameBlockTextWrapper}>
          <h5>{appName}</h5>
          <span>{appInitials}</span>
        </div>
      </div>
      {onClick && (
        <div className={s.stockSumWrapper}>
          <span className={s.stockCostValue}>{count} stocks</span>
          <h5 className={s.stockCost}>
            {(count * Number(currency)).toFixed(2).toString().replace('.', ',')}
            <span className={s.exchangeCurrency}>
              {' '}
              {exchangeCurrency || 'SET'}
            </span>
          </h5>
        </div>
      )}
      <div className={s.stockCostWrapper}>
        <span className={s.stockCostValue}>1 stocks</span>
        <h5 className={s.stockCost}>
          {currency.toString().replace('.', ',')}
          <span className={s.exchangeCurrency}>
            {' '}
            {exchangeCurrency || 'SET'}
          </span>
        </h5>
      </div>
      {onClick && (
        <div className={s.cancelBtn}>
          <button onClick={onClick}>
            <Image
              src='/assets/icons/cancel-button.svg'
              width={20}
              height={20}
              alt={'cancel'}
            />
          </button>
        </div>
      )}
    </div>
  )
}