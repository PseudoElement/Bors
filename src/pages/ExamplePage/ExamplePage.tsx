import { FC, useState } from 'react'

import {
  Wrapper,
  EventsCard,
  Popup,
  StockHorizonCard,
  Slider,
  Input,
  StocksCard,
  Tag,
  Indicator,
  Card,
  Button,
  Sponsor,
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
  Sponsors,
  LoginRegistrationModal,
  CardStocksInfo,
} from 'features'

import { mock__sponsors_card } from 'shared/mocks/mock_sponsors_cards'
import { mock__event_card } from 'shared/mocks/mock_eventsCard'
import { event_slider_mock } from 'shared/mocks/mock_event_slider'
import { mock__stock_card } from 'shared/mocks/mock_stockCard'
import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { mockInfoCardsData } from 'shared/mocks/infoCardsData'

import { FilterKeys } from 'shared/types/filterPanel'

import s from './examplePage.module.scss'
import { card_stocks_info } from 'shared/mocks/mock_cardStocksInfo'

export const ExamplePage: FC = () => {
  console.log(event_slider_mock)
  const sliderItem = event_slider_mock.map((card, idx) => (
    <EventsCard {...card} key={idx} />
  ))
  const [openPasswordRecovery, setOpenPasswordRecovery] =
    useState<boolean>(false)
  const [openBuyStock, setOpenBuyStock] = useState<boolean>(false)
  const [valueInput, setValueInput] = useState<string>('')

  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [defaultValue, setDefaultValue] = useState<FilterKeys>({
    price: false,
    lineBusiness: false,
    popularity: false,
  })
  console.log(defaultValue)

  const stockHorizonData = {
    ...mock__stock_card[1],
    onClick: () => {},
    exchangeCurrency: 'SET',
  }

  return (
    <div>
      <Wrapper text={'header authorised'}>
        {/* <Header variant='authorised' /> */}
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
        <EventSection title='EVENTS' cards={event_slider_mock} />
      </Wrapper>

      <Wrapper text='LeaderboardList'>
        <LeaderboardList boards={mock__leaderboard} />
      </Wrapper>

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
        <StocksCard
          {...mock__stock_card[0]}
          onClick={() => console.log('1234')}
        />
        <StocksCard
          {...mock__stock_card[1]}
          onClick={() => console.log('1234')}
        />
      </Wrapper>

      <Wrapper text='Login and Registration modal'>
        <button onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? 'hide modal' : 'show modal'}
        </button>
        <LoginRegistrationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(prev => !prev)}
        />
      </Wrapper>

      <Wrapper text={'Horizon card'}>
        <StockHorizonCard {...stockHorizonData} />
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

      <Wrapper text={'footer'}>{/* <Footer /> */}</Wrapper>

      <Wrapper text='CardStocksInfo'>
        <Popup isOpen={openPopup} onClose={() => setOpenPopup(false)}>
          <CardStocksInfo {...card_stocks_info} />
        </Popup>
        <button onClick={() => setOpenPopup(true)}>Popup</button>
      </Wrapper>

      <Wrapper text={'Sponsors'}>
        <Sponsors cards={mock__sponsors_card} />
      </Wrapper>
    </div>
  )
}
