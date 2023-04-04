import { FC, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { StocksCard, Popup, Input } from 'components'

import {
    FiltersPanel,
    BottomBuySection,
    BuyStockList,
    CardStocksInfo,
} from 'features'

import { mock__stock_card } from 'shared/mocks/mock_stockCard'
import { card_stocks_info } from 'shared/mocks/mock_cardStocksInfo'

import SearchIcon from '/public/assets/icons/Search.png'

import s from './buyStock.module.scss'

export const BuyStock: FC = () => {

    const [showBuyStockList, setShowBuyStockList] = useState<boolean>(false)
    const [showBuyStockInfo, setShowBuyStockInfo] = useState<boolean>(false)
    const [stockInBasket, setStockInBasket] = useState<any[]>([])
    const [searchValue, setSearchValue] = useState<string>('')

    console.log(stockInBasket)

    return <>
        <Popup
            isOpen={showBuyStockList}
            onClose={() => setShowBuyStockList(false)}
        >
            <BuyStockList stocks={stockInBasket} />
        </Popup>
        <Popup
            isOpen={showBuyStockInfo}
            onClose={() => setShowBuyStockInfo(false)}
        >
            <CardStocksInfo {...card_stocks_info} />
        </Popup>
        <div className={cn(s.page, s.container)}>
            <h1 className={s.title}>Buy Stocks</h1>
            <p className={s.pageDescription}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit.{' '}
            </p>
            <div className={s.filterWrapper}>
                <FiltersPanel
                    defaultValue={{ price: true, lineBusiness: true, popularity: true }}
                    onChange={() => { }}
                >
                    <div className={s.inputWrapper}>
                        <div className={s.searchIcon}><Image src={SearchIcon.src} alt='search' width={24} height={24} /></div>
                        <Input
                            classname={s.searchInput}
                            placeholder='Search'
                            value={searchValue}
                            onChange={e => setSearchValue(e)}
                        />
                    </div>
                </FiltersPanel>
                <div className={s.grid}>
                    {mock__stock_card.map(item => (
                        <StocksCard
                            onShow={() => setShowBuyStockInfo(true)}
                            onClick={() => setStockInBasket(prev => [...prev, item])}
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
            {stockInBasket.length !== 0 && (
                <div className={s.bottomBuySection}>
                    <BottomBuySection
                        onClose={() => setShowBuyStockList(true)}
                        stocks={stockInBasket}
                    />
                </div>
            )}
        </div>
    </>
}