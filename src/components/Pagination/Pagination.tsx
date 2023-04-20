import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { useAppSelector } from 'shared/hooks/redux'
import { pageSetter } from 'shared/helpers/pageSetter'

import Arrow from '/public/assets/icons/paginationArrow.svg'

import s from './pagination.module.scss'

export interface PaginationProps {
  classNames?: string
}

export const Pagination: FC<PaginationProps> = ({ classNames }) => {
  const [pages, setPages] = useState<number[]>([])
  const { total, current_page } = useAppSelector(state => state.stock)

  const [cur, setCur] = useState(1)

  const handlePush = (page: number) => {
    if (page <= total) {
      setCur(page)
      setPages(pageSetter(total, page))
    }

    if (page !== cur) {
      // console.log(page)
    }
  }

  useEffect(() => {
    if (total) {
      setPages(pageSetter(total, cur))
    }
  }, [total])

  return (
    <div className={cn(s.paginationWrap, classNames)}>
      <div className={s.pagination}>
        {pages.map(page => (
          <button
            key={page}
            onClick={() => handlePush(page)}
            className={cn(s.pageButton, { [s.active]: cur === page })}
          >
            {page}
          </button>
        ))}

        <button
          className={s.paginationButton}
          onClick={() => handlePush(cur + 1)}
        >
          <div>Fortsätt</div>
          <Arrow />
        </button>
      </div>

      <div className={s.paginationButton}>Show by 24</div>
    </div>
  )
}
