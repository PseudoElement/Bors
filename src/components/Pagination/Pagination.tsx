import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { DropMenu } from 'features'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { pageSetter } from 'shared/helpers/pageSetter'
import { setStockPagination } from 'store/slices/stockSlice'

import { FilterMeta } from 'shared/types/stocks'
import Arrow from '/public/assets/icons/paginationArrow.svg'

import s from './pagination.module.scss'

export interface PaginationProps {
  classNames?: string
}

export const Pagination: FC<PaginationProps> = ({ classNames }) => {
  const dispatch = useAppDispatch()
  const [pages, setPages] = useState<number[]>([])
  const { total, current_page, per_page, last_page } = useAppSelector(
    state => state.stock.params
  )
  const handlePush = (page: number) => {
    dispatch(setStockPagination({ current_page: page, per_page: per_page }))
  }

  const handlePerPage = (perPage: number) => {
    dispatch(
      setStockPagination({ current_page: current_page, per_page: perPage })
    )
  }

  const handleNext = (page: number) => {
    if (page !== last_page) {
      handlePush(page + 1)
    }
  }

  useEffect(() => {
    setPages(pageSetter(total, current_page, last_page))
  }, [current_page, last_page])

  const perPage: FilterMeta[] = [
    { value: '0', label: 'this object is hidden' },
    { value: '6', label: 'Visas senast 6' },
    { value: '12', label: 'Visas senast 12' },
    { value: '24', label: 'Visas senast 24' },
    { value: '48', label: 'Visas senast 48' },
  ]

  return (
    <div className={cn(s.paginationWrap, classNames)}>
      <div className={s.pagination}>
        {pages.length > 1 ? (
          <>
            {pages.map(page => (
              <button
                key={page}
                onClick={() => handlePush(page)}
                className={cn(s.pageButton, {
                  [s.active]: current_page === page,
                })}
              >
                {page}
              </button>
            ))}

            <button
              className={cn(s.paginationButton, s.buttonNext)}
              onClick={() => handleNext(current_page)}
            >
              <div>Fortsätt</div>
              <Arrow />
            </button>
          </>
        ) : null}
      </div>

      <div className={s.buttonWrap}>
        <DropMenu
          className={s.showButton}
          resetValue={false}
          withArrow='ArrowTop'
          activeColor='Blue'
          dropSide='Top'
          data={perPage}
          defaultValues={perPage[3]}
          onChange={value => handlePerPage(value.value ? +value.value : 0)}
        />
      </div>
    </div>
  )
}
