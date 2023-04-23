import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { Input, Pagination } from 'components'
import { FiltersPanel, StockSection } from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { stockAll } from 'shared/api/routes/stock'
import { setStockData, setStockParams } from 'store/slices/stockSlice'

import SearchIcon from '/public/assets/icons/Search.png'

import s from './buyStock.module.scss'

export const BuyStock: FC = () => {
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const stocks = useAppSelector(state => state.stock.data)

  const getAllStocks = async () => {
    const { data } = await stockAll()
    dispatch(setStockData(data.data.data))
    dispatch(setStockParams(data.data))
  }

  useEffect(() => {
    getAllStocks()
  }, [])

  return (
    <div className={s.page}>
      <div className={s.container}>
        <h1 className={s.title}>Köp aktier</h1>

        <p className={s.pageDescription}>
          Du kan köpa aktier för 1 000 000 demo kronor, men kan inte sälja eller
          byta ditt innehav under aktietävlingen.{' '}
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
        </div>

        {stocks ? <StockSection stocks={stocks} /> : null}

        <Pagination />
      </div>
    </div>
  )
}
