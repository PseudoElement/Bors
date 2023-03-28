import { FC } from 'react'
import { IndicatorProps } from 'shared/types/indicators'
import s from './indicator.module.scss'

export const Indicator: FC<IndicatorProps> = ({ title, indicator }) => {
  return (
    <div className={s.indicators}>
      <div className={s.title}>{title}</div>
      <div className={s.indicator}>{indicator}</div>
    </div>
  )
}
