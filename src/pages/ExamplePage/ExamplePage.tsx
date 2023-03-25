import { FC, useState } from 'react'
import {
  Wrapper,
  EventsCard,
  Popup,
  Slider,
  Input,
  StocksCard,
} from 'components'
import { EventSection, FiltersPanel, PasswordRecovery } from 'features'

import { mock__event_card } from 'shared/mocks/mock_eventsCard'
import { mock__stock_card } from 'shared/mocks/mock_stockCard'
import { event_slider_mock } from 'shared/mocks/mock_event_slider'

import s from './examplePage.module.scss'
import { FilterKeys } from 'shared/types/filterPanel'

export const ExamplePage: FC = () => {
  console.log(event_slider_mock)
  const sliderItem = event_slider_mock.map(card => <EventsCard {...card} />)

  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const [openPasswordRecovery, setOpenPasswordRecovery] =
    useState<boolean>(false)
  const [valueInput, setValueInput] = useState<string>('')
  const [defaultValue, setDefaultValue] = useState<FilterKeys>({
    price: false,
    lineBusiness: false,
    popularity: false,
  })
  console.log(defaultValue)

  return (
    <div className={s.examplePage}>
      <Wrapper text={'popup'}>
        <Popup isOpen={openPopup} onClose={() => setOpenPopup(false)}>
          <></>
        </Popup>
        <button onClick={() => setOpenPopup(true)}>Popup</button>
      </Wrapper>
      <Wrapper text={'Events Card'}>
        <EventsCard {...mock__event_card} />
      </Wrapper>
      <Wrapper text='Slider'>
        <EventSection title='EVENTS' card={sliderItem} />
      </Wrapper>
      <Wrapper text='Input'>
        <Input
          withIcon={true}
          placeholder='placeholder'
          value={valueInput}
          onChange={setValueInput}
        />
      </Wrapper>
      <Wrapper text='PasswordRecovery'>
        <Popup
          isOpen={openPasswordRecovery}
          onClose={() => setOpenPasswordRecovery(false)}
        >
          <PasswordRecovery />
        </Popup>
        <button onClick={() => setOpenPasswordRecovery(true)}>
          Password recovery
        </button>
      </Wrapper>
      <Wrapper text={'Stocks Card'}>
        <StocksCard {...mock__stock_card} onClick={() => console.log('1234')} />
        <StocksCard
          {...mock__stock_card}
          onClick={() => console.log('1234')}
          count={0}
        />
      </Wrapper>
      <Wrapper text='Filter Panel'>
        <FiltersPanel defaultValue={defaultValue} onChange={setDefaultValue} />
      </Wrapper>
    </div>
  )
}
