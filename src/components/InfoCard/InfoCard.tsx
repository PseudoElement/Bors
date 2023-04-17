import { FC } from 'react'
import Image from 'next/image'

import { InfoCardProps } from 'shared/types/site'

import s from './infoCard.module.scss'

export const InfoCard: FC<InfoCardProps> = ({
  title,
  status,
  created_at,
  order,
  updated_at,
  id,
  icon,
}) => {
  return (
    <div id='info' className={s.card}>
      <div
        className={s.cardTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>

      <div className={s.cardImageWrapper}>
        <Image
          className={s.cardImage}
          src={icon}
          width={210}
          height={210}
          alt='info card'
        />
      </div>

      <div className={s.cardImageWrapper}>
        <Image
          className={s.cardImage}
          src={icon}
          width={210}
          height={210}
          alt='info card'
        />
      </div>
    </div>
  )
}
