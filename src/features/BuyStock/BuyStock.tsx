import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { StocksCard, Popup, Input } from 'components'
import {
  FiltersPanel,
  BottomBuySection,
  BuyStockList,
  CardStocksInfo,
} from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { stockAll, buyStocks, detailStock } from 'shared/api/routes/stock'
import { getStockResponse } from 'store/slices/stockSlice'

import { Stocks } from 'shared/types/stocks'

import { card_stocks_info } from 'shared/mocks/mock_cardStocksInfo'
import SearchIcon from '/public/assets/icons/Search.png'

import s from './buyStock.module.scss'
import { filter } from 'lodash'

export const BuyStock: FC = () => {
  const dispatch = useAppDispatch()
  const [showBuyStockList, setShowBuyStockList] = useState<boolean>(false)
  const [showBuyStockInfo, setShowBuyStockInfo] = useState<boolean>(false)
  const [stockInBasket, setStockInBasket] = useState<Stocks[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const stocks = useAppSelector(state => state.stock.data)

  const getAllStocks = async () => {
    try {
      const data = await stockAll()
      dispatch(getStockResponse(data.data.data.data))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getAllStocks()
  }, [dispatch])

  const buyStock = async () => {
    try {
      const stocksObj: any = {}
      stockInBasket.forEach(item => {
        stocksObj[item.id] = 10
      })

      const response = await buyStocks({ stock: stocksObj })
      console.log(response)
      // console.log({ stock: { '1': 5, '2': 10 } })
    } catch (error) {}
  }

  const deleteStockInBasket = (id: number) => {
    setStockInBasket(stocks => stocks.filter(item => item.id !== id))
  }

  const showStockDetails = async (id: number) => {
    try {
      const data = await detailStock(id)

      dispatch(
        getStockResponse(
          stocks?.map(item => (item.id === id ? data.data.data : item))
        )
      )
      setShowBuyStockInfo(true)
    } catch (e) {
      alert((e as Error).message)
      console.error(e)
    }
  }

  return (
    <>
      <Popup
        isOpen={showBuyStockList}
        onClose={() => setShowBuyStockList(false)}
      >
        <BuyStockList onClick={buyStock} stocks={stockInBasket} />
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
          Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja eller
          byta ditt innehav under aktietävlingen.{' '}
        </p>

        <div className={s.filterWrapper}>
          <FiltersPanel
            defaultValue={{ price: true, lineBusiness: true, popularity: true }}
            onChange={() => {}}
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
                onShow={() => showStockDetails(item.id)}
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
              onClick={(id: number) => deleteStockInBasket(id)}
              onClose={() => setShowBuyStockList(true)}
              stocks={stockInBasket}
            />
          </div>
        )}
      </div>
    </>
  )
}
