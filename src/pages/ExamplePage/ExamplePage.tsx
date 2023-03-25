import { FC, useState } from 'react'

import {
  Wrapper,
  EventsCard,
  Popup,
  HorizonCard,
  Slider,
  Input,
  StocksCard,
  Tag,
  Indicator,
  Card,
} from 'components'

import { EventSection, PasswordRecovery, FiltersPanel, Info } from 'features'

import { mock__event_card } from 'shared/mocks/mock_eventsCard'
import { mock__stock_card } from 'shared/mocks/mock_stockCard'
import { event_slider_mock } from 'shared/mocks/mock_event_slider'
import { mockInfoCardsData } from 'shared/mocks/infoCardsData'

import { FilterKeys } from 'shared/types/filterPanel'

import s from './examplePage.module.scss'

export const ExamplePage: FC = () => {
  const [openPasswordRecovery, setOpenPasswordRecovery] =
    useState<boolean>(false)
  const [valueInput, setValueInput] = useState<string>('')

  const sliderItem = event_slider_mock.map(card => (
    <EventsCard {...card} key={1} />
  ))
  const [openPopup, setOpenPopup] = useState<boolean>(false)

  console.log(event_slider_mock)

  const [defaultValue, setDefaultValue] = useState<FilterKeys>({
    price: false,
    lineBusiness: false,
    popularity: false,
  })
  console.log(defaultValue)

  return (
    <div>
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
      <Wrapper text={'Horizon card'}>
        <HorizonCard
          {...mock__stock_card}
          onClick={() => console.log(1)}
          exchangeCurrency={'SET'}
        />
      </Wrapper>
      <Wrapper text='Tag'>
        <Tag title='SAAS' />
        <Tag title='E-COMMERCE' />
      </Wrapper>
      <Wrapper text='Indicator'>
        <Indicator title='Market Cap' indicator='678,17 billion $' />
      </Wrapper>
      <Wrapper text='Filter Panel'>
        <FiltersPanel defaultValue={defaultValue} onChange={setDefaultValue} />
      </Wrapper>
      <Wrapper text='Info'>
        <Info cards={mockInfoCardsData}></Info>
      </Wrapper>
    </div>
  )
}
