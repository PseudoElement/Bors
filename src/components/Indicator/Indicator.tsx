import { FC } from 'react'
import s from './indicator.module.scss'

interface IndicatorProps {
  title: string
  indicator: string
}

export const Indicator: FC<IndicatorProps> = ({ title, indicator }) => {
  return (
    <div className={s.indicators}>
      <div className={s.title}>{title}</div>
      <div className={s.indicator}>{indicator}</div>
    </div>
  )
}
