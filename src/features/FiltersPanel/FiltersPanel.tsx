import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { DropMenu } from 'features'
import { Input, Popup } from 'components'

import {
  setStockData,
  setStockFilters,
  setStockParams,
} from 'store/slices/stockSlice'
import { getAllStocks } from 'pages/BuyStock/helpers'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'

import { FilterMeta, StockFilters } from 'shared/types/stocks'
import {
  mock_min_max_popularity,
  mock_min_max_price,
} from 'shared/mocks/mock_filters'
import SearchIcon from '/public/assets/icons/Search.png'
import FilterIcon from '/public/assets/icons/FiltersHorizontal.svg'

import s from './filtersPanel.module.scss'

export const FiltersPanel: FC = () => {
  const dispatch = useAppDispatch()
  const filterParams = useAppSelector(state => state.stock.params)

  const [filters, setFilters] = useState<StockFilters>({
    search: '',
    price: mock_min_max_price[0],
    popularity: mock_min_max_popularity[0],
    current_page: filterParams.current_page,
    per_page: filterParams.per_page
  })

  const handleSearchText = (text: string) => {
    setFilters({ ...filters, search: text })
  }

  const handlePopularity = (value: FilterMeta) => {
    setFilters({ ...filters, popularity: value })
  }

  const handlePrice = (value: FilterMeta) => {
    setFilters({ ...filters, price: value })
  }

  const getStocks = async (filters: StockFilters) => {
    const data = await getAllStocks(filters)
    if (data) {
      dispatch(setStockData(data.data))
      dispatch(setStockParams(data))
    }
  }

  useEffect(() => {
    getStocks(filters)
    dispatch(setStockFilters(filters))
  }, [filters])

  // mobile handlers ===========
  const [isOpenMobilePopup, setIsOpenMobilePopup] = useState<boolean>(false)
  const [mobileFilters, setMobileFilters] = useState<StockFilters>({
    search: '',
    price: mock_min_max_price[0],
    popularity: mock_min_max_popularity[0],
    current_page: filterParams.current_page,
    per_page: filterParams.per_page
  })

  const mobileHandleFilters = () => {
    getStocks(mobileFilters)
    setIsOpenMobilePopup(false)
  }

  const mobileHandlePopularity = () => {
    setMobileFilters({
      ...mobileFilters,
      popularity: mock_min_max_popularity[0],
    })
    getStocks({ ...mobileFilters, popularity: mock_min_max_popularity[0] })
  }

  const mobileHandlePrice = () => {
    setMobileFilters({
      ...mobileFilters,
      price: mock_min_max_price[0],
    })
    getStocks({ ...mobileFilters, price: mock_min_max_price[0] })
  }

  const mobileHandleSearch = () => {
    setMobileFilters({
      ...mobileFilters,
      search: '',
    })
    getStocks({ ...mobileFilters, search: '' })
  }

  return (
    <div className={s.filters}>
      <div className={s.desktopFilters}>
        <DropMenu
          onChange={data => handlePopularity(data)}
          data={mock_min_max_popularity}
          className={s.short}
          defaultValues={mock_min_max_popularity[0]}
        />
        <DropMenu
          onChange={data => handlePrice(data)}
          data={mock_min_max_price}
          className={s.short}
          defaultValues={mock_min_max_price[0]}
        />

        <div className={s.inputWrapper}>
          <div className={s.searchIcon}>
            <Image src={SearchIcon.src} alt='search' width={24} height={24} />
          </div>

          <Input
            classname={s.searchInput}
            placeholder='Sök'
            value={filters.search}
            onChange={e => handleSearchText(e)}
          />
        </div>
      </div>

      {/* mobile filters*/}
      <div className={s.mobileFilters}>
        <button
          onClick={() => setIsOpenMobilePopup(true)}
          className={s.mobileSelect}
        >
          Filtrera lager <FilterIcon />
        </button>

        <div className={s.mobileFiltersActive}>
          {mobileFilters.price !== mock_min_max_price[0] ? (
            <div className={s.filter}>
              <div>{mobileFilters.price.label}</div>

              <button
                className={s.resetMenuBtn}
                onClick={mobileHandlePrice}
              ></button>
            </div>
          ) : null}

          {mobileFilters.popularity !== mock_min_max_popularity[0] ? (
            <div className={s.filter}>
              <div>{mobileFilters.popularity.label}</div>

              <button
                className={s.resetMenuBtn}
                onClick={mobileHandlePopularity}
              ></button>
            </div>
          ) : null}

          {mobileFilters.search ? (
            <div className={s.filter}>
              <div>{mobileFilters.search}</div>

              <button
                className={s.resetMenuBtn}
                onClick={mobileHandleSearch}
              ></button>
            </div>
          ) : null}
        </div>
      </div>

      <Popup
        isOpen={isOpenMobilePopup}
        onClose={() => setIsOpenMobilePopup(false)}
        onSubmit={mobileHandleFilters}
      >
        <div className={s.mobileFiltersPopup}>
          <div className={s.mobileFiltersTitle}>Filter stocks</div>

          <DropMenu
            onChange={data =>
              setMobileFilters({ ...mobileFilters, popularity: data })
            }
            data={mock_min_max_popularity}
            className={s.short}
            defaultValues={mobileFilters.popularity}
          />

          <DropMenu
            onChange={data =>
              setMobileFilters({ ...mobileFilters, price: data })
            }
            data={mock_min_max_price}
            className={s.short}
            defaultValues={mobileFilters.price}
          />

          <div className={s.inputWrapper}>
            <div className={s.searchIcon}>
              <Image src={SearchIcon.src} alt='search' width={24} height={24} />
            </div>

            <Input
              classname={s.searchInput}
              placeholder='Sök'
              value={mobileFilters.search}
              onChange={data =>
                setMobileFilters({ ...mobileFilters, search: data })
              }
            />
          </div>
        </div>
      </Popup>
    </div>
  )
}
