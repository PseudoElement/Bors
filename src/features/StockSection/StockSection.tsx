import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { Popup, StocksCard } from 'components'
import { BuyStockList, CardStocksInfo, BottomBuySection } from 'features'

import { buyStocks, detailStock } from 'shared/api/routes/stock'
import { setStockData } from 'store/slices/stockSlice'
import { useAppDispatch } from 'shared/hooks/redux'

import { Stocks } from 'shared/types/stocks'

import s from './stockSection.module.scss'

export interface StockSectionProps {
  classNames?: string
  stocks: Stocks[]
}

export interface Basket {
  stock: Stocks
  buy: any
}

export const StockSection: FC<StockSectionProps> = ({ classNames, stocks }) => {
  const dispatch = useAppDispatch()
  const [showBuyStockList, setShowBuyStockList] = useState<boolean>(false)
  const [showBuyStockInfo, setShowBuyStockInfo] = useState<boolean>(false)

  const [basket, setBasket] = useState<Basket[]>([])
  const [stockDetails, setStockDetails] = useState<Stocks | null>(null)

  const deleteStockInBasket = (id: number) => {
    setBasket(prevState => prevState.filter(item => item.stock.id !== id))
  }

  const showStockDetails = async (id: number) => {
    try {
      const data = await detailStock(id)
      dispatch(
        setStockData(
          stocks?.map(item => (item.id === id ? data.data.data : item)) || null
        )
      )

      setStockDetails(data.data.data)
      setShowBuyStockInfo(true)
    } catch (e) {
      console.error(e)
    }
  }

  const stockAddToBasket = (value: Basket) => {
    // remove stock in basket if count === 0
    if ([`${Object.values(value.buy)}`][0] === '0') {
      setBasket(prevState =>
        prevState.filter(
          item => Object.keys(item.buy)[0] !== Object.keys(value.buy)[0]
        )
      )
      return
    }

    // add stock in basket if count > 0, and checking if there is a stock in the basket
    if (
      !basket.find(
        item => Object.keys(item.buy)[0] === Object.keys(value.buy)[0]
      )
    ) {
      setBasket(prevState => [...prevState, value])
    } else {
      // Checking if there is stock in the cart, if true change count
      setBasket(
        basket.map(item => {
          if (Object.keys(item.buy)[0] === Object.keys(value.buy)[0]) {
            return value
          }
          return item
        })
      )
    }
  }

  const buyStock = async () => {
    // transform basket array on buy requested object
    const buyStock = {
      stock: basket.reduce(
        (obj, item) =>
          Object.assign(obj, {
            [Object.keys(item.buy)[0]]: Object.values(item.buy)[0],
          }),
        {}
      ),
    }

    // POST buy object
    try {
      const { data } = await buyStocks(buyStock)

      if (data.status === 'success') {
        // if res ok clear basket and close buy popup
        setShowBuyStockList(true)

        return
      }

      throw new Error(data.messge)
    } catch (e) {
      console.error(e)
    }
  }

  const buyOneStock = async () => {
    if (!stockDetails) return

    try {
      const { data } = await buyStocks({ stock: { [stockDetails.id]: 1 } })
      if (data.status === 'success') {
        setShowBuyStockList(true)
        setShowBuyStockInfo(false)

        return
      }
    } catch (e) {
      console.error(e)
    }
  }

  const clearBasket = () => {
    setShowBuyStockList(false)
    setBasket([])
  }

  useEffect(() => {
    if (showBuyStockInfo === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'inherit'
    }
  }, [showBuyStockInfo])

  return (
    <>
      <Popup
        isOpen={showBuyStockList}
        onClose={clearBasket}
        buttonText='Bekräfta'
        onSubmit={clearBasket}
      >
        <BuyStockList basket={basket} />
      </Popup>

      <Popup
        isOpen={showBuyStockInfo}
        onClose={() => setShowBuyStockInfo(false)}
        onSubmit={buyOneStock}
        buttonText='Köp aktier'
      >
        {/*// @ts-ignore*/}
        <CardStocksInfo {...stockDetails} />
      </Popup>

      <div className={cn(s.grid, classNames)}>
        {stocks?.map(item => (
          <StocksCard
            onShow={() => showStockDetails(item.id)}
            onAddToBasket={stockAddToBasket}
            key={item.id}
            basket={basket}
            stock={item}
          />
        ))}
      </div>

      <div
        className={cn(
          s.bottomBuySection,
          basket.length !== 0 ? s.bottomBuySectionShow : ''
        )}
      >
        <BottomBuySection
          onClick={(id: number) => deleteStockInBasket(id)}
          onBuyStock={buyStock}
          basket={basket}
        />
      </div>
    </>
  )
}
