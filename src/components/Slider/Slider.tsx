import { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import { A11y, Navigation, Pagination, Autoplay } from 'swiper'

import s from './slider.module.scss'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowIcon from '/public/assets/icons/Arrow.svg'

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
  breakpoints,
}) => {
  const paginationOptions = withPagination && { clickable: true }
  const navigationOptions = withNavigation && {
    nextEl: `.${nextEl}`,
    prevEl: `.${prevEl}`,
  }

  return (
    <>
      {withNavigation && (
        <div className={cn(s.nextElWrapper)}>
          <div className={cn(s.swiperButtonNext, nextEl)}>
            <ArrowIcon alt='arrow' />
          </div>
          <div className={cn(s.swiperButtonPrev, prevEl)}>
            <ArrowIcon alt='arrow' />
          </div>
        </div>
      )}
      <Swiper
        autoHeight={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigationOptions || false}
        pagination={paginationOptions}
        centeredSlides={centeredSlides}
        breakpoints={breakpoints}
        zoom={true}
        allowSlideNext={false}
        loop={true}
        initialSlide={Math.floor(children.length / 2)}
      >
        {children.length
          ? children.map((child, idx) => (
            <SwiperSlide className={cn(s['swiper-slide'])} key={idx}>{child}</SwiperSlide>
          ))
          : null}
      </Swiper>
    </>
  )
}