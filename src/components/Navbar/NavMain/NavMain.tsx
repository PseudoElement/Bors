import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import { main_nav_links } from 'shared/mocks/navBar'
import AccountImg from '/public/assets/icons/accountImg.svg'

import s from './navMain.module.scss'

export interface NavMainProps {
  classNames?: string
  menuOpen: () => void
  burgerMenuOpen: () => void
}

export const NavMain: FC<NavMainProps> = ({
  classNames,
  menuOpen,
  burgerMenuOpen,
}) => {
  return (
    <nav className={cn(classNames, s.nav)}>
      <button className={s.burger} onClick={burgerMenuOpen}>
        <div className={s.burgerLine} />
        <div className={s.burgerLine} />
        <div className={s.burgerLine} />
      </button>

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
