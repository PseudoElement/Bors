import { FC } from 'react'

import { Sponsor } from 'components'

import { SponsorType } from 'components/Sponsor/Sponsor'

import s from './sponsors.module.scss'

interface SponsorsProps {
  cards: SponsorType[]
}

export const Sponsors: FC<SponsorsProps> = ({ cards }) => {
  return (
    <section className={s.wrap} id={'sponsors'}>
      <div className={s.title}>Sponsors</div>

      <div className={s.sponsors}>
        {cards.map(card => {
          return (
            <div key={card.id} className={s.sponsor}>
              <Sponsor image={card.image} id={card.id} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
