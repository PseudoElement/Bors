import { FC, ReactNode, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import cn from 'classnames'

import { LeaderList } from 'shared/types/leaderboard'
import ArrowIcon from '/public/assets/icons/Arrow.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './slider.module.scss'

interface SliderProps {
  children: ReactNode[] | []
  slidesPerView?: number
  withNavigation?: boolean
  withPagination?: boolean
  centeredSlides?: boolean
  nextEl?: string
  prevEl?: string
  classname?: string
  spaceBetween?: number
  breakpoints?: any
  getMore: () => void
  leaders: LeaderList[]
}

export const Slider: FC<SliderProps> = ({
  children,
  slidesPerView = 1,
  withNavigation = true,
  withPagination = false,
  centeredSlides = false,
  spaceBetween = 0,
  nextEl = 'moreNext',
  prevEl = 'morePrev',
  getMore,
  leaders,
}) => {
  const [index, setIndex] = useState(0)
  const paginationOptions = withPagination && { clickable: true }
  const navigationOptions = withNavigation && {
    nextEl: `.${nextEl}`,
    prevEl: `.${prevEl}`,
  }

  const handleChange = (activeIndex: number) => {
    setIndex(activeIndex)
    getMore()
  }

  return (
    <>
      <div className={cn(s.nextElWrapper)}>
        <div className={cn(s.swiperButtonNext, nextEl)}>
          <ArrowIcon alt='arrow' />
        </div>

        <h2 className={s.leaderboardTitle}>{leaders?.[index]?.date}</h2>

        <div className={cn(s.swiperButtonPrev, prevEl)}>
          <ArrowIcon alt='arrow' />
        </div>
      </div>

      <div className={s.slider}>
        <Swiper
          className={s.swiper}
          modules={[Navigation, Pagination]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          breakpoints={{
            1372: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          navigation={navigationOptions || false}
          pagination={paginationOptions}
          centeredSlides={centeredSlides}
          onSlideChange={e => handleChange(e.activeIndex)}
        >
          {children.length
            ? children.map((child, idx) => (
                <SwiperSlide className={cn(s['swiper-slide'])} key={idx}>
                  {child}
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  )
}
