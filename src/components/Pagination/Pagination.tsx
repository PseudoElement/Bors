import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { pageSetter } from 'shared/helpers/pageSetter'
import { setStockPagination } from 'store/slices/stockSlice'

import Arrow from '/public/assets/icons/paginationArrow.svg'

import s from './pagination.module.scss'
import { DropMenuOption } from '../../features/DropMenu/DropMenuOption/DropMenuOption'

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

  const handleNext = (page: number) => {
    if (page !== last_page) {
      handlePush(page + 1)
    }
  }

  useEffect(() => {
    setPages(pageSetter(total, current_page, last_page))
  }, [current_page])

  return (
    <div className={cn(s.paginationWrap, classNames)}>
      <div className={s.pagination}>
        {pages.map(page => (
          <button
            key={page}
            onClick={() => handlePush(page)}
            className={cn(s.pageButton, { [s.active]: current_page === page })}
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
      </div>

      <div className={s.buttonWrap}>
        <button className={s.paginationButton}>Show by 24</button>

        <button
          className={cn(s.paginationButton, s.buttonNextBottom)}
          onClick={() => handleNext(current_page)}
        >
          <div>Fortsätt</div>
          <Arrow />
        </button>
      </div>
    </div>
  )
}
