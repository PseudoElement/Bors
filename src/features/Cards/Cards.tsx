import React from 'react'

import { ComponentProps, CardsType } from 'shared/types/Cards'

export const CardsMap = (
  { cards }: CardsType,
  { component: Component, props }: ComponentProps
) => {
  return (
    <section className={`${Component}`}>
      {cards.map((card, index) => (
        <Component key={index} {...props} {...card} />
      ))}
    </section>
  )
}
