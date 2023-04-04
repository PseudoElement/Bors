import { FC, ReactNode, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import cn from 'classnames'

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
}) => {
  const paginationOptions = withPagination && { clickable: true }
  const navigationOptions = withNavigation && {
    nextEl: `.${nextEl}`,
    prevEl: `.${prevEl}`,
  }

  const [active, setActive] = useState(9);

  const handleClick = () => {
    if (active === children.length - 10) {
      setActive(0)
    } else {
      setActive(prev => prev - 1)
    }
  }


  return (
    <>
      {withNavigation && (
        <div className={cn(s.nextElWrapper)}>
          <div className={cn(s.swiperButtonNext, nextEl)}>
            <ArrowIcon alt='arrow' />
          </div>
          <div onClick={handleClick} className={cn(s.swiperButtonPrev, prevEl)}>
            <ArrowIcon alt='arrow' />
          </div>
        </div>
      )}

      <div className={s.slider}>
        <Swiper
          autoHeight={true}
          modules={[Navigation, Pagination]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          breakpoints={{
            1220: {
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
          allowSlideNext={false}
          initialSlide={children.length - 1}
        >
          {children.length
            ? children.map((child, idx) => (
              <SwiperSlide className={cn(s[`${idx === active ? 'swiper-slide active' : 'swiper-slide'}`])} key={idx}>
                {child}
              </SwiperSlide>
            ))
            : null}
        </Swiper>
      </div>
    </>
  )
}
