import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { StocksCard, Popup, Input, Pagination } from 'components'
import {
  FiltersPanel,
  BottomBuySection,
  BuyStockList,
  CardStocksInfo,
} from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { stockAll, buyStocks, detailStock } from 'shared/api/routes/stock'
import { setStockData, setStockParams } from 'store/slices/stockSlice'

import { Stocks } from 'shared/types/stocks'

import { card_stocks_info } from 'shared/mocks/mock_cardStocksInfo'
import SearchIcon from '/public/assets/icons/Search.png'

import s from './buyStock.module.scss'

export const BuyStock: FC = () => {
  const dispatch = useAppDispatch()
  const [showBuyStockList, setShowBuyStockList] = useState<boolean>(false)
  const [showBuyStockInfo, setShowBuyStockInfo] = useState<boolean>(false)
  const [stockInBasket, setStockInBasket] = useState<Stocks[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [stockDetails, setStockDetails] = useState<Stocks | null>(null)
  const stocks = useAppSelector(state => state.stock.data)

  const getAllStocks = async () => {
    const { data } = await stockAll()
    dispatch(setStockData(data.data.data))
    dispatch(setStockParams({ ...data.data, data: null }))
  }

  useEffect(() => {
    getAllStocks()
  }, [])

  const buyStock = async () => {
    const toBuyStocks: any = {}

    stockInBasket.forEach(item => {
      toBuyStocks[item.id] = item.count
    })

    await buyStocks({ stock: toBuyStocks })
    setStockInBasket([])
    setShowBuyStockInfo(false)
    // console.log({ stock: { '1': 5, '2': 10 } })
  }

  const deleteStockInBasket = (id: number) => {
    setStockInBasket(gotStocks => gotStocks.filter(item => item.id !== id))
  }

  const showStockDetails = async (id: number) => {
    const data = await detailStock(id)
    dispatch(
      setStockData(
        stocks?.map(item => (item.id === id ? data.data.data : item)) || null
      )
    )
    console.log(data.data.data)
    setStockDetails(data.data.data)
    setShowBuyStockInfo(true)
  }

  return (
    <>
      <div className={s.page}>
        <Popup
          isOpen={showBuyStockList}
          onClose={() => setShowBuyStockList(false)}
          buttonText='Bekräfta'
          onSubmit={buyStock}
        >
          <BuyStockList stocks={stockInBasket} />
        </Popup>

        <Popup
          isOpen={showBuyStockInfo}
          onClose={() => setShowBuyStockInfo(false)}
          onSubmit={buyStock}
          buttonText='Köp aktier'
        >
          {/*// @ts-ignore*/}
          <CardStocksInfo {...stockDetails} />
        </Popup>

        <div className={s.container}>
          <h1 className={s.title}>Köp aktier</h1>

          <p className={s.pageDescription}>
            Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja
            eller byta ditt innehav under aktietävlingen.{' '}
          </p>

          <div className={s.filterWrapper}>
            <FiltersPanel
              defaultValue={{
                price: true,
                lineBusiness: true,
                popularity: true,
              }}
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

          <Pagination />
        </div>
      </div>

      <div
        className={cn(
          s.bottomBuySection,
          stockInBasket.length !== 0 ? s.bottomBuySectionShow : ''
        )}
      >
        <BottomBuySection
          onClick={(id: number) => deleteStockInBasket(id)}
          onClose={() => setShowBuyStockList(true)}
          stocks={stockInBasket}
        />
      </div>
    </>
  )
}
