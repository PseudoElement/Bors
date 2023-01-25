import {
  LAPTOP_SCREEN,
  DESKTOP_MIN_SCREEN,
  DESKTOP_MAX_SCREEN,
  DESKTOP_MIDDLE_SCREEN,
  TABLET_MAX_SCREEN,
  TABLET_MIN_SCREEN,
  TABLET_SCREEN,
} from 'shared/constants/screenResolutions'

export const slidesPerViewHome = (width: number): number => {
  if (width <= TABLET_MAX_SCREEN) return 1
  if (width <= LAPTOP_SCREEN) return 2
  if (width <= DESKTOP_MIN_SCREEN) return 3
  if (width <= DESKTOP_MIN_SCREEN + 120) return 4
  if (width <= DESKTOP_MAX_SCREEN) return 5
  else return 5
 }

export const slidesPerViewAbout = (width: number): number => {
  if (width > DESKTOP_MIDDLE_SCREEN) return 2
  if (width > DESKTOP_MIN_SCREEN) return 1.5
  if (width > TABLET_SCREEN) return 1.2
  if (width < TABLET_SCREEN) return 1
  return 0
}

export const slidesPerViewTestimonials = (width: number): number => {
  if (width > LAPTOP_SCREEN) return 3
  if (width < LAPTOP_SCREEN && width >= TABLET_MIN_SCREEN) return 2
  if (width < TABLET_MIN_SCREEN) return 1
  return 0
}

export const slidesPerViewTravelPlanner = (width: number):number => {
  if (width > DESKTOP_MIN_SCREEN) return 3.2
  if (width > LAPTOP_SCREEN) return 3
  if (width > TABLET_MAX_SCREEN) return 2
  return 1
 }