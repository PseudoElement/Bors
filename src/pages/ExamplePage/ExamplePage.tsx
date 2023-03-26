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
  Button,
} from 'components'

import {
  EventSection,
  PasswordRecovery,
  LeaderboardList,
  FillRequest,
  BuyStockList,
  FiltersPanel,
  Info,
  Header,
  Footer,
  MyStocks,
} from 'features'

import { mock__event_card } from 'shared/mocks/mock_eventsCard'
import { mock__stock_card } from 'shared/mocks/mock_stockCard'
import { event_slider_mock } from 'shared/mocks/mock_event_slider'

import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { mockInfoCardsData } from 'shared/mocks/infoCardsData'

import { FilterKeys } from 'shared/types/filterPanel'

import s from './examplePage.module.scss'

export const ExamplePage: FC = () => {
  const [openPasswordRecovery, setOpenPasswordRecovery] =
    useState<boolean>(false)
  const [openBuyStock, setOpenBuyStock] = useState<boolean>(false)
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
      <Wrapper text={'header authorised'}>
        <Header variant='authorised' />
      </Wrapper>
      <Wrapper text={'header unauthorised'}>
        <Header variant='unauthorised' />
      </Wrapper>
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
      <LeaderboardList boards={mock__leaderboard} />
      <Wrapper text='Input'>
        <Input
          withIcon={true}
          placeholder='placeholder'
          value={valueInput}
          onChange={setValueInput}
        />
      </Wrapper>
      <Wrapper text='FillRequest'>
        <FillRequest />
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
      <Wrapper text='BuyStock'>
        <Popup isOpen={openBuyStock} onClose={() => setOpenBuyStock(false)}>
          <BuyStockList stocks={mock__stock_card} />
        </Popup>
        <button onClick={() => setOpenBuyStock(true)}>BuyStock</button>
      </Wrapper>
      <Wrapper text={'Stocks Card'}>
        <StocksCard {...mock__stock_card} onClick={() => console.log('1234')} />
        <StocksCard
          {...mock__stock_card}
          onClick={() => console.log('1234')}
          hasNft={false}
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
      <Wrapper text='Button'>
        <Button>enter</Button>
      </Wrapper>
      <Wrapper text='Info'>
        <Info cards={mockInfoCardsData}></Info>
      </Wrapper>
      <Wrapper text='My Stocks'>
        <MyStocks />
      </Wrapper>
      <Wrapper text={'footer'}>
        <Footer />
      </Wrapper>
    </div>
  )
}
