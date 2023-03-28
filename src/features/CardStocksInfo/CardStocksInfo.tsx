import { FC } from 'react'

import Image, { ImageProps } from 'next/image'

import { Button, Indicator, Tag } from 'components'

import { IndicatorProps } from 'shared/types/indicators'
import { Stocks } from 'shared/types/stocks'

import s from './cardStocksInfo.module.scss'

interface CardStocksInfoProps extends Stocks {
  currencyValue: string
  countryImage: ImageProps['src']
  country: string
  tag: string[]
  textInfoCard: string
  indicators: IndicatorProps[]
  profit: IndicatorProps[]
}

export const CardStocksInfo: FC<CardStocksInfoProps> = ({
  image,
  appName,
  appInitials,
  currency,
  currencyValue,
  countryImage,
  country,
  tag,
  textInfoCard,
  indicators,
  profit,
}) => {
  return (
    <div className={s.wrapperCardInfo}>
      <div className={s.wrapperHeader}>
        <div className={s.titleCard}>
          <Image width={66} height={66} src={image} />
          <div className={s.appName}>
            {appName}
            <span className={s.appInitials}>({appInitials})</span>
          </div>
          <div className={s.currentSection}>
            <span className={s.titleCurent}>current value</span>
            <div className={s.curentValue}>
              {currency}
              <span>{currencyValue}</span>
            </div>
          </div>
        </div>
        <div className={s.countryCard}>
          <Image width={36} height={36} src={countryImage} />
          <div className={s.countryInfo}>
            <span className={s.countryIssuer}>Country of the issuer</span>
            <span className={s.country}>{country}</span>
          </div>
        </div>
      </div>
      <div className={s.cardTags}>
        {tag.map((tag, idx) => (
          <Tag title={tag} key={idx} />
        ))}
      </div>
      <div className={s.textInfoCard}>{textInfoCard}</div>
      <div className={s.indicators}>
        <div className={s.titleIndicators}>Indicators</div>
        <div className={s.indicatorsItem}>
          {indicators.map((item, idx) => (
            <Indicator title={item.title} indicator={item.indicator} />
          ))}
        </div>
      </div>
      <div className={s.indicators}>
        <div className={s.titleIndicators}>Revenue and profit</div>
        <div className={s.indicatorsItem}>
          {profit.map((item, idx) => (
            <Indicator title={item.title} indicator={item.indicator} />
          ))}
        </div>
      </div>
      <div className={s.buyButton}>
        <Button children={'Buy Stocks'} />
      </div>
    </div>
  )
}
