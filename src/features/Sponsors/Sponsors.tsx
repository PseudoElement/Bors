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
        <div className={s.container}>
          <div className={s.firstLine}>
            {cards.map((card, index) => {
              return (
                <div key={card.id} className={s.sponsorWrap}>
                  {index <= 2 && <Sponsor image={card.image} id={card.id} />}
                </div>
              )
            })}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.secondLine}>
            {cards.map((card, index) => {
              return (
                <div key={card.id} className={s.sponsorWrap}>
                  {index > 2 && index < 7 && (
                    <Sponsor image={card.image} id={card.id} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className={s.container}>
          <div className={s.thirdLine}>
            {cards.map((card, index) => {
              return (
                <div key={card.id} className={s.sponsorWrap}>
                  {index > 6 && <Sponsor image={card.image} id={card.id} />}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
