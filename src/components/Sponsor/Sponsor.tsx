import { FC } from 'react'
import cn from 'classnames'

import s from './sponsor.module.scss'

export interface SponsorType {
  image: string
  id: number
}

export const Sponsor: FC<SponsorType> = ({ image }) => {
  return (
    <div className={cn(s.sponsor)}>
      <img src={image} alt={image} />
    </div>
  )
}
