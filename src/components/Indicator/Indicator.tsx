import { FC } from 'react'
import { IndicatorProps } from 'shared/types/indicators'
import s from './indicator.module.scss'

export const Indicator: FC<IndicatorProps> = ({ name, indicator }) => {
  return (
    <div className={s.indicators}>
      <div className={s.title}>{name}</div>
      <div className={s.indicator}>{indicator}</div>
    </div>
  )
}
