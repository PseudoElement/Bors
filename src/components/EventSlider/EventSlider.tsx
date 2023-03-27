import { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination } from 'swiper'

import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'

import cn from 'classnames'
import s from './eventSlider.module.scss'

interface EventSliderProps {
  children: ReactNode[] | []
  className?: string
  spaceBetween?: number
  slidesPerView?: number
  withNavigation?: boolean
  withPagination?: boolean
  nextEl?: string
  prevEl?: string
}

export const EventSlider: FC<EventSliderProps> = ({
  children,
  className,
  spaceBetween,
  slidesPerView = 1,
  withPagination = false,
  withNavigation = false,
  nextEl = 'moreNext',
  prevEl = 'morePrev',
}) => {
  const paginationOptions = withPagination && { clickable: true }
  const navigationOptions = withNavigation && {
    nextEl: `.${nextEl}`,
    prevEl: `.${prevEl}`,
  }
  return (
    <div className={cn(s.slider, className)}>
      <Swiper
        autoHeight={true}
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigationOptions || false}
        pagination={paginationOptions}
        breakpoints={{
          1220: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {children.length
          ? children.map((child, idx) => (
            <SwiperSlide className={s['swiper-slide']} key={idx}>{child}</SwiperSlide>
          ))
          : []}
      </Swiper>

      {withNavigation && (
        <div className={s.navigationButton}>
          <div
            className={cn(s.swiperButtonPrev, prevEl, 'swiper-button-prev')}
          />
          <div
            className={cn(s.swiperButtonNext, nextEl, 'swiper-button-next')}
          />
        </div>
      )}
    </div>
  )
}
