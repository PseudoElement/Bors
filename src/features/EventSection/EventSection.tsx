import { FC, ReactNode } from 'react'
import { Slider } from 'components'
import s from './event.module.scss'

interface EventSectionProps {
  card: ReactNode[] | []
  title: string
}

export const EventSection: FC<EventSectionProps> = ({ card, title }) => {
  return (
    <div className={s.eventSection}>
      <div className={s.title}>{title}</div>
      <Slider
        slidesPerView={3}
        spaceBetween={24}
        withNavigation={true}
        withPagination={true}
      >
        {card}
      </Slider>
    </div>
  )
}
