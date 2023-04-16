import { FC } from 'react'
import Image from 'next/image'

import { Button } from 'components'

import { Events } from 'shared/types/events'

import s from './eventsCard.module.scss'

interface EventsCardProps extends Events {
  onLectureClick?: () => void
  onParticipateClick?: () => void
}

export const EventsCard: FC<EventsCardProps> = ({
  id,
  image,
  month,
  day,
  title,
  description,
  btnTitle,
}) => {
  return (
    <div className={s.cardWrap}>
      <div className={s.image}>
        <Image src={image} width='202' height='202' alt='image' />
      </div>

      <div className={s.card}>
        <div className={s.shadow} />

        <div className={s.date}>
          <div className={s.days}>{day}</div>
          <div className={s.month}>{month}</div>
        </div>

        <button className={s.customButton}>
          <span className={s.btnTitle}>{btnTitle}</span>
        </button>

        <h4 className={s.title}>{title}</h4>
        <p className={s.description}>{description}</p>
        <Button className={s.button}>Delta</Button>
      </div>
    </div>
  )
}
