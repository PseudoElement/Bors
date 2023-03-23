import { FC, useState } from 'react'
import { Wrapper, EventsCard, Popup } from 'components'

import { mock__event_card } from 'shared/mocks/mock_eventsCard'

import s from './examplePage.module.scss'

export const ExamplePage: FC = () => {

  const [openPopup, setOpenPopup] = useState<boolean>(false)

  return (
    <div className={s.examplePage}>
      <Wrapper text={'popup'}>
        <Popup
          isOpen={openPopup}
          onClose={() => setOpenPopup(false)}
        >
        </Popup>
        <button onClick={() => setOpenPopup(true)}>
          Popup
        </button>
      </Wrapper>
      <Wrapper text={'Events Card'}>
        <EventsCard {...mock__event_card} />
      </Wrapper>
    </div>
  )
}
