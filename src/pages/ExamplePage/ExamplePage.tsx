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
  Header,
  Footer,
  MyStocks,
  UserAccount,
  Sponsors,
  LoginRegistrationModal,
  CardStocksInfo,
  BottomBuySection,
  DropMenu,
} from 'features'

import { mock__sponsors_card } from 'shared/mocks/mock_sponsors_cards'
import { mock__event_card } from 'shared/mocks/mock_eventsCard'
import { event_slider_mock } from 'shared/mocks/mock_event_slider'
import { mock__stock_card } from 'shared/mocks/mock_stockCard'
import { mock__leaderboard } from 'shared/mocks/mock_leaderboard'
import { card_stocks_info } from 'shared/mocks/mock_cardStocksInfo'
import { mock_by_line_of_business } from 'shared/mocks/mock_filters'

import s from './examplePage.module.scss'
import style from '../../features/DropMenu/dropMenu.module.scss'
import { PopupAfterSubmitStatus } from 'shared/enums'

export const ExamplePage: FC = () => {
  const sliderItem = event_slider_mock.map((card, idx) => (
    <EventsCard {...card} key={idx} />
  ))

  const [openPasswordRecovery, setOpenPasswordRecovery] =
    useState<boolean>(false)
  const [openBuyStock, setOpenBuyStock] = useState<boolean>(false)
  const [valueInput, setValueInput] = useState<string>('')

  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [popupStatus, setPopupStatus] = useState<PopupAfterSubmitStatus>(
    PopupAfterSubmitStatus.CLOSED
  )

  return (
    <div>
      <Wrapper text={'header authorised'}>
        {/* <Header variant='authorised' /> */}
      </Wrapper>

      <Wrapper text={'header unauthorised'}>
        <Header variant={true} />
      </Wrapper>

      <Wrapper text={'account'}>
        <UserAccount />
      </Wrapper>

      <Wrapper text={'popup'}>
        <Popup isOpen={openPopup} onClose={() => setOpenPopup(false)}>
          <></>
        </Popup>
        <button onClick={() => setOpenPopup(true)}>Popup</button>
      </Wrapper>
      <Wrapper text='Bottom Buy Section'>
        {/*<BottomBuySection*/}
        {/*  stocks={mock__stock_card}*/}
        {/*  onClose={() => console.log(1)}*/}
        {/*/>*/}
      </Wrapper>
      <Wrapper text={'Events Card'}>
        <EventsCard {...mock__event_card} />
      </Wrapper>

      <Wrapper text='Slider'>
        <EventSection cards={event_slider_mock} />
      </Wrapper>

      <Wrapper text='LeaderboardList'>
        {/*<LeaderboardList boards={mock__leaderboard} />*/}
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
        <FillRequest setPopupStatus={setPopupStatus} />
      </Wrapper>

      <Wrapper text='PasswordRecovery'>
        <PasswordRecovery
          setIsOpenPasswordRecovery={() => setOpenPasswordRecovery(false)}
          isOpenPasswordRecovery={openPasswordRecovery}
        />

        <button onClick={() => setOpenPasswordRecovery(true)}>
          Password recovery
        </button>
      </Wrapper>

      <Wrapper text='BuyStock'>
        <Popup isOpen={openBuyStock} onClose={() => setOpenBuyStock(false)}>
          {/*<BuyStockList stocks={mock__stock_card} />*/}
        </Popup>
        <button onClick={() => setOpenBuyStock(true)}>BuyStock</button>
      </Wrapper>

      <Wrapper text={'Stocks Card'}>
        {/*<StocksCard*/}
        {/*  {...mock__stock_card[0]}*/}
        {/*  onClick={() => console.log('1234')}*/}
        {/*/>*/}
        {/*<StocksCard*/}
        {/*  {...mock__stock_card[1]}*/}
        {/*  onClick={() => console.log('1234')}*/}
        {/*/>*/}
      </Wrapper>

      {/* <Wrapper text='Login and Registration modal'>
        <button onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? 'hide modal' : 'show modal'}
        </button>
        <LoginRegistrationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(prev => !prev)}
        />
      </Wrapper> */}

      <Wrapper text={'Horizon card'}>
        {/*<StockHorizonCard {...stockHorizonData} />*/}
      </Wrapper>

      <Wrapper text='Tag'>
        <Tag name='SAAS' />
        <Tag name='E-COMMERCE' />
      </Wrapper>

      <Wrapper text='Indicator'>
        <Indicator name='Market Cap' indicator='678,17 miljard $' />
      </Wrapper>

      <Wrapper text='Filter Panel'>
        {/*<FiltersPanel defaultValue={defaultValue} onChange={setDefaultValue} />*/}
      </Wrapper>

      <Wrapper text='Button'>
        <Button>enter</Button>
      </Wrapper>

      <Wrapper text='Info'>
        {/*<Info cards={mockInfoCardsData}></Info>*/}
      </Wrapper>

      <Wrapper text='My Stocks'>
        <MyStocks />
      </Wrapper>

      <Wrapper text={'footer'}>{/* <Footer /> */}</Wrapper>

      <Wrapper text='CardStocksInfo'>
        <Popup isOpen={openPopup} onClose={() => setOpenPopup(false)}>
          {/*<CardStocksInfo {...card_stocks_info} />*/}
        </Popup>
        <button onClick={() => setOpenPopup(true)}>Popup</button>
      </Wrapper>

      <Wrapper text={'Sponsors'}>
        {/* <Sponsors cards={mock__sponsors_card} /> */}
      </Wrapper>
    </div>
  )
}
