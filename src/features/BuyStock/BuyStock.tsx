import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import cn from 'classnames'

import { StocksCard, Popup, Input } from 'components'
import {
  FiltersPanel,
  BottomBuySection,
  BuyStockList,
  CardStocksInfo,
} from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { stockAll } from 'shared/api/routes/stock'
import { getStockResponse } from 'store/slices/stockSlice'

import { card_stocks_info } from 'shared/mocks/mock_cardStocksInfo'
import SearchIcon from '/public/assets/icons/Search.png'

import s from './buyStock.module.scss'

export const BuyStock: FC = () => {
  const dispatch = useAppDispatch()
  const [showBuyStockList, setShowBuyStockList] = useState<boolean>(false)
  const [showBuyStockInfo, setShowBuyStockInfo] = useState<boolean>(false)
  const [stockInBasket, setStockInBasket] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const stocks = useAppSelector(state => state.stock.data)

  const getAllStocks = async () => {
    try {
      const data = await stockAll()
      dispatch(getStockResponse(data.data))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getAllStocks()
  }, [dispatch])

  return (
    <>
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
        {/*// @ts-ignore*/}
        <CardStocksInfo {...card_stocks_info} />
      </Popup>

      <div className={cn(s.page, s.container)}>
        <h1 className={s.title}>Köp aktier</h1>

        <p className={s.pageDescription}>
          Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja eller byta ditt innehav under aktietävlingen.{' '}
        </p>

        <div className={s.filterWrapper}>
          <FiltersPanel
            defaultValue={{ price: true, lineBusiness: true, popularity: true }}
            onChange={() => { }}
          >
            <div className={s.inputWrapper}>
              <div className={s.searchIcon}>
                <Image
                  src={SearchIcon.src}
                  alt='search'
                  width={24}
                  height={24}
                />
              </div>
              <Input
                classname={s.searchInput}
                placeholder='Sök'
                value={searchValue}
                onChange={e => setSearchValue(e)}
              />
            </div>
          </FiltersPanel>

          <div className={s.grid}>
            {stocks?.map(item => (
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
  )
}
