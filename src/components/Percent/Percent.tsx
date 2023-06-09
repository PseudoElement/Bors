import { FC } from 'react'
import cn from 'classnames'

import { toFixedCount } from 'shared/helpers/countToBuy'

import UpArrow from '/public/assets/image/ArrowUp.svg'

import s from './percent.module.scss'

export interface PercentProps {
  classNames?: string
  count: number | undefined
}

export const Percent: FC<PercentProps> = ({ classNames, count }) => {
  return (
    <div className={cn(s.percent, classNames)}>
      {count && count > 0 ? (
        <div className={s.positive}>
          <UpArrow />
          {toFixedCount(count)}%
        </div>
      ) : (
        <div className={s.negative}>
          {count ? (
            <>
              <UpArrow /> {toFixedCount(count)}
            </>
          ) : (
            0
          )}
          %
        </div>
      )}
    </div>
  )
}
