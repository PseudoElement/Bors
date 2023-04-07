import { FC } from 'react'

import s from './sponsor.module.scss'

export interface SponsorType {
  image: string
  id: number
}

export const Sponsor: FC<SponsorType> = ({ image }) => {
  return (
    <div className={s.sponsor}>
      <img className={s.img} src={image} alt={image} />
    </div>
  )
}
