import { FC } from 'react'

import s from './sponsor.module.scss'

export interface SponsorType {
  icon: string
  id: number
  alt?: string
}

export const Sponsor: FC<SponsorType> = ({ icon, alt }) => {
  return (
    <div className={s.sponsor}>
      <img className={s.img} src={icon} alt={alt} />
    </div>
  )
}
