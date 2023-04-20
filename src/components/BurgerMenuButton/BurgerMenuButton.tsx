import { FC } from 'react'
import cn from 'classnames'

import s from './burgerMenuButton.module.scss'

export interface BurgerMenuButtonProps {
  defaultBurger?: string
  defaultStyles?: string
  activeStyles?: string
  setIsOpenMenu: () => void
  isOpenMenu: boolean
}

export const BurgerMenuButton: FC<BurgerMenuButtonProps> = ({
  setIsOpenMenu,
  isOpenMenu,
  defaultStyles,
  activeStyles,
  defaultBurger,
}) => {
  return (
    <button
      onClick={setIsOpenMenu}
      className={cn(
        s.burgerMenu,
        { [s.activeMenu]: isOpenMenu },
        isOpenMenu ? activeStyles : '',
        defaultBurger
      )}
    >
      <div className={cn(s.burgerMenuLine, defaultStyles)} />
      <div className={cn(s.burgerMenuLine, defaultStyles)} />
      <div className={cn(s.burgerMenuLine, defaultStyles)} />
    </button>
  )
}
