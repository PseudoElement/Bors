import { FC, ReactNode } from 'react'
import { EventsCard, EventSlider } from 'components'
import s from './event.module.scss'
import { EventsList } from 'shared/types/events'

interface EventSectionTitle {
  title: string
}

export const EventSection: FC<EventsList & EventSectionTitle> = ({ cards, title }) => {
  return (
    <div className={s.eventSection}>
      <div className={s.title}>{title}</div>
      <EventSlider
        slidesPerView={3.3}
        spaceBetween={24}
        withNavigation={true}
        withPagination={true}
        nextEl={'btnNext'}
        prevEl={'btnPreve'}
      >
        {cards.map(card => (
          <EventsCard key={card.id} {...card} />
        ))}
      </EventSlider>
    </div >
  )
}