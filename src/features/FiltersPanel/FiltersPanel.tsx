import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { DropMenu } from 'features'
import { Input, Popup } from 'components'

import { setStockData, setStockFilters } from 'store/slices/stockSlice'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { useDebounce } from 'shared/hooks/useDebounce'

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
  const [filters, setFilters] = useState<StockFilters>({
    search: '',
    price: mock_min_max_price[0],
    popularity: mock_min_max_popularity[0],
  })
  const { params, data } = useAppSelector(state => state.stock)

  const handleSearchText = (text: string) => {
    setFilters({ ...filters, search: text })
  }

  const handlePopularity = (value: FilterMeta) => {
    setFilters({ ...filters, popularity: value })
  }

  const handlePrice = (value: FilterMeta) => {
    setFilters({ ...filters, price: value })
  }

  const debouncedFilters = useDebounce(filters, 500)

  useEffect(() => {
    if (debouncedFilters.search.length < 3 && data?.length) return

    dispatch(setStockData({ ...params, current_page: 1, data }))
    dispatch(setStockFilters(debouncedFilters))
  }, [debouncedFilters])

  // mobile handlers ===========
  const [isOpenMobilePopup, setIsOpenMobilePopup] = useState<boolean>(false)
  const [mobileFilters, setMobileFilters] = useState<StockFilters>({
    search: '',
    price: mock_min_max_price[0],
    popularity: mock_min_max_popularity[0],
  })

  const mobileHandleFilters = () => {
    dispatch(setStockFilters(mobileFilters))
    setIsOpenMobilePopup(false)
  }

  const mobileHandlePopularity = () => {
    setMobileFilters({
      ...mobileFilters,
      popularity: mock_min_max_popularity[0],
    })
    dispatch(
      setStockFilters({
        ...mobileFilters,
        popularity: mock_min_max_popularity[0],
      })
    )
  }

  const mobileHandlePrice = () => {
    setMobileFilters({
      ...mobileFilters,
      price: mock_min_max_price[0],
    })
    dispatch(
      setStockFilters({ ...mobileFilters, price: mock_min_max_price[0] })
    )
  }

  const mobileHandleSearch = () => {
    setMobileFilters({
      ...mobileFilters,
      search: '',
    })
    dispatch(setStockFilters({ ...mobileFilters, search: '' }))
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
