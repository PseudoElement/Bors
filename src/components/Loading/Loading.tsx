import { FC } from 'react'
import cn from 'classnames'

import s from './Loading.module.scss'

interface Props {
  isBlack?: boolean
}

export const Loading: FC<Props> = ({ isBlack = false }) => {
  return (
    <div className={cn(s.ldsBlock, isBlack && s.idsBlockBlack)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
