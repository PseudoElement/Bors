import { FC } from 'react'

import { EventsCard, EventSlider } from 'components'

import { Events, EventsList } from 'shared/types/events'

import s from './event.module.scss'

interface EventSectionTitle {
  cards: Events[]
}

export const EventSection: FC<EventsList & EventSectionTitle> = ({ cards }) => {
  return (
    <div className={s.eventSection} id={'event'}>
      <div className={s.title}>EVENTS</div>

      <EventSlider
        slidesPerView={3.3}
        spaceBetween={24}
        withNavigation={true}
        withPagination={true}
        nextEl={'btnNext'}
        prevEl={'btnPrev'}
      >
        {cards.map(card => (
          <EventsCard key={card.id} {...card} />
        ))}
      </EventSlider>
    </div>
  )
}
