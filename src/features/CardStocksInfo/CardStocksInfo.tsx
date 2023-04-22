import { FC } from 'react'

import Image, { ImageProps } from 'next/image'

import { Button, Indicator, Tag } from 'components'

import { IndicatorProps } from 'shared/types/indicators'
import { Country, StockTypes, Stocks } from 'shared/types/stocks'

import s from './cardStocksInfo.module.scss'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

// @ts-ignore
interface CardStocksInfoProps extends Stocks {
  currencyValue: string
  countryImage?: ImageProps['src'] | undefined
  country: Country
  types: StockTypes[]
  textInfoCard: string
  indicators: IndicatorProps[]
  revenue: IndicatorProps[]
}

export const CardStocksInfo: FC<CardStocksInfoProps> = ({
  image,
  company_name,
  company_code,
  price,
  currencyValue,
  countryImage,
  country,
  types,
  textInfoCard,
  indicators,
  revenue,
}) => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.wrapperCardInfo}>
      <div className={s.wrapperHeader}>
        <div className={s.titleCard}>
          <div className={s.titleCardTop}>
            <Image width={66} height={66} src={image} alt='icon' />
            <div className={s.appName}>
              {company_name}
              <span className={s.appInitials}>({company_code})</span>
            </div>
          </div>

          <div className={s.currentSection}>
            <span className={s.titleCurent}>Nuvarande värde</span>

            <div className={s.curentValue}>
              {price?.price}
              25.67
              <span>{currencyValue}</span>
            </div>
          </div>
        </div>

        <div className={s.countryCard}>
          <Image
            width={36}
            height={36}
            src={countryImage!}
            alt='country icon'
          />

          <div className={s.countryInfo}>
            <span className={s.countryIssuer}>Emittentens land</span>
            <span className={s.country}>{country.name}</span>
          </div>
        </div>
      </div>

      <div className={s.cardTags}>
        {types.map((tag, idx) => (
          <Tag name={tag.name} key={idx} />
        ))}
      </div>

      <div className={s.textInfoCard}>{textInfoCard}</div>

      {width <= 620 && (
        <div className={s.mobileCountryCard}>
          <Image
            width={36}
            height={36}
            src={countryImage!}
            alt='country icon'
          />

          <div className={s.mobileCountryInfo}>
            <span className={s.mobileCountryIssuer}>Country of the issuer</span>
            <span className={s.mobileCountry}>{country.short_name}</span>
          </div>
        </div>
      )}

      <div className={s.indicators}>
        <div className={s.titleIndicators}>Indikatorer</div>

        <div className={s.indicatorsItem}>
          {indicators.map((item, idx) => (
            <Indicator
              name={item.name}
              indicator={item.indicator}
              key={item.indicator}
            />
          ))}
        </div>
      </div>

      <div className={s.indicators}>
        <div className={s.titleIndicators}>Intäkter och vinst</div>

        <div className={s.indicatorsItem}>
          {revenue.map((item, idx) => (
            <Indicator
              name={item.name}
              indicator={item.indicator}
              key={item.indicator}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
