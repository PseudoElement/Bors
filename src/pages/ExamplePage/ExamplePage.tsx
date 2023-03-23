import { FC } from 'react'
import { Wrapper, EventsCard } from 'components'

import { mock__event_card } from 'shared/mocks/mock_eventsCard'

import s from './examplePage.module.scss'

export const ExamplePage: FC = () => {

  return (
    <div className={s.examplePage}>
      <Wrapper text={'название'}>
        <div>компонент</div>
      </Wrapper>
      <Wrapper text={'Events Card'}>
        <EventsCard {...mock__event_card}/>
      </Wrapper>
    </div>
  )
}
