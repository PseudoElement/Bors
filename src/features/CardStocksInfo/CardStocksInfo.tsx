import { FC } from 'react'

import Image, { ImageProps } from 'next/image'

import { Button, Indicator, Percent, Tag } from 'components'

import { IndicatorProps } from 'shared/types/indicators'
import { Country, StockTypes, Stocks } from 'shared/types/stocks'

import s from './cardStocksInfo.module.scss'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

export const CardStocksInfo: FC<Stocks> = ({
  image,
  company_name,
  company_code,
  price,
  country,
  last_price,
  name,
  count,
  real_count,
  buy_count,
  p_s,
  p_e,
  id,
  created_at,
  desc,
  updated_at,
  ebitda,
  revenue_growth,
  growth_eps,
  diluted_eps,
  net_profit_margin,
  market_cap,
  country_id,
  revenue,
    types,
}) => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.wrapperCardInfo}>
      <div className={s.wrapperHeader}>
        <div className={s.titleCard}>
          <div className={s.titleCardTop}>
            <div className={s.icon}>
              <div
                className={s.companyLogo}
                style={{ backgroundImage: `url("${image}")` }}
              ></div>
            </div>

            <div className={s.appName}>
              <span className={s.appInitials}>
                {company_name} ({company_code})
              </span>
            </div>
          </div>

          <div className={s.currentSection}>
            <span className={s.titleCurent}>Nuvarande värde</span>

            <div className={s.curentValue}>
              <div className={s.price}>
                {last_price ? last_price.price : price}
                <span>SEK</span>
              </div>

              <Percent
                classNames={s.percent}
                count={last_price ? last_price?.percentage : 0}
              />
            </div>
          </div>

          <div className={s.countryCard}>
            <div
              className={s.countryImage}
              style={{ backgroundImage: `url("${country.image}")` }}
            />

            <div className={s.countryInfo}>
              <span className={s.countryIssuer}>{country.short_name}</span>
              <span className={s.country}>{country.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.cardTags}>
        {types.map((tag, idx) => (
          <Tag name={tag.name} key={idx} />
        ))}
      </div>

      <div className={s.textInfoCard}>{desc}</div>

      <div className={s.mobileCountryCard}>
        <div
          className={s.countryImage}
          style={{ backgroundImage: `url("${country.image}")` }}
        />

        <div className={s.mobileCountryInfo}>
          <span className={s.mobileCountryIssuer}>{country.short_name}</span>
          <span className={s.mobileCountry}>{country.short_name}</span>
        </div>
      </div>

      <div className={s.indicators}>
        <div className={s.titleIndicators}>Indikatorer</div>

        <div className={s.indicatorContainer}>
          <div className={s.indicatorWrap}>
            <Indicator name={'Market Cap'} indicator={`${market_cap} SEK`} />
            <Indicator name={'Ebitda'} indicator={`${ebitda} SEK`} />
            <Indicator name={'P/E'} indicator={`${p_e}`} />
            <Indicator name={'P/S'} indicator={`${p_s}`} />
          </div>

          <div className={s.indicatorWrap}>
            <Indicator name={'Diluted EPS'} indicator={`${diluted_eps} SEK`} />
            <Indicator name={'Growth EPS'} indicator={`${growth_eps}%`} />
            <Indicator
              name={'Revenue growth'}
              indicator={`${revenue_growth}%`}
            />
            <Indicator
              name={'Net Profit Margin'}
              indicator={`${net_profit_margin}%`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
