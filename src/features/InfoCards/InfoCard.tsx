import { CardsListProps } from 'shared/types/infoCards'
import { Card } from 'components/Info/Info'

import s from './infoCard.module.scss'

export const Info = ({ cards }: CardsListProps) => {
  return (
    <section className={s.cards}>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} image={card.image} />
      ))}
    </section>
  )
}
