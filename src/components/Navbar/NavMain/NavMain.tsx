import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import { BurgerMenuButton } from 'components'

import { main_nav_links } from 'shared/mocks/navBar'
import AccountImg from '/public/assets/icons/accountImg.svg'

import s from './navMain.module.scss'

export interface NavMainProps {
  classNames?: string
  isBurgerOpen: boolean
  menuOpen: () => void
  burgerMenuOpen: () => void
}

export const NavMain: FC<NavMainProps> = ({
  classNames,
  menuOpen,
  burgerMenuOpen,
  isBurgerOpen,
}) => {
  return (
    <nav className={cn(classNames, s.nav)}>
      <BurgerMenuButton
        defaultStyles={s.burgerMenuLine}
        setIsOpenMenu={burgerMenuOpen}
        isOpenMenu={isBurgerOpen}
      />

      <ul className={s.links}>
        {main_nav_links.map(item => (
          <li key={item.label} className={s.link}>
            <Link href={item.link} scroll={false}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={menuOpen} className={s.logInButton}>
        <div className={s.btnImg}>
          <AccountImg />
        </div>

        <p>Logga In</p>
      </button>
    </nav>
  )
}
