import { FC } from 'react'

import { Sponsor } from 'components'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import { SponsorsList } from 'shared/types/site'

import s from './sponsors.module.scss'

export const Sponsors: FC<SponsorsList> = ({ cards }) => {
  const { width } = useWindowDimensions()
  return (
    <section className={s.wrap} id={'sponsors'}>
      <div className={s.title}>Sponsorer</div>

      {width >= 1440 ? (
        <div className={s.sponsors}>
          <div className={s.container}>
            <div className={s.firstLine}>
              {cards?.map((card, index) => {
                return (
                  <div key={card.id} className={s.sponsorWrap}>
                    {index <= 2 && <Sponsor icon={card.icon} id={card.id} />}
                  </div>
                )
              })}
            </div>
          </div>

          <div className={s.container}>
            <div className={s.secondLine}>
              {cards?.map((card, index) => {
                return (
                  <div key={card.id} className={s.sponsorWrap}>
                    {index > 2 && index < 7 && (
                      <Sponsor icon={card.icon} id={card.id} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className={s.container}>
            <div className={s.thirdLine}>
              {cards?.map((card, index) => {
                return (
                  <div key={card.id} className={s.sponsorWrap}>
                    {index > 6 && <Sponsor icon={card.icon} id={card.id} />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={s.sponsors}>
          <div className={s.container}>
            <div className={s.firstLine}>
              {cards?.map((card, index) => {
                return (
                  <div key={card.id} className={s.sponsorWrap}>
                    <Sponsor icon={card.icon} id={card.id} alt={card.title} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
