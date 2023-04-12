import { FC } from 'react'

import { InfoCard } from 'components'

import { SiteData } from 'shared/types/site'

import s from './infoSection.module.scss'

export const InfoSection: FC<SiteData> = ({ infos }) => {
  return (
    <section className={s.cards} id={'about'}>
      {infos.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </section>
  )
}
