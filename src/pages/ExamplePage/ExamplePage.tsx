import { FC, useState } from 'react'
import { Wrapper, EventsCard, Popup, Slider } from 'components'
import { EventSection } from 'features'

import { mock__event_card } from 'shared/mocks/mock_eventsCard'
import { event_slider_mock } from 'shared/mocks/mock_event_slider'

import s from './examplePage.module.scss'

export const ExamplePage: FC = () => {
  console.log(event_slider_mock)
  const sliderItem = event_slider_mock.map(card => <EventsCard {...card} />)

  const [openPopup, setOpenPopup] = useState<boolean>(false)

  return (
    <div className={s.examplePage}>
      <Wrapper text={'popup'}>
        <Popup isOpen={openPopup} onClose={() => setOpenPopup(false)}></Popup>
        <button onClick={() => setOpenPopup(true)}>Popup</button>
      </Wrapper>
      <Wrapper text={'Events Card'}>
        <EventsCard {...mock__event_card} />
      </Wrapper>
      <Wrapper text='Slider'>
        <EventSection title='EVENTS' card={sliderItem} />
      </Wrapper>
    </div>
  )
}
