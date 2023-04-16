import { FC, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { logoutAuth } from 'shared/api/routes/user'
import { logoutUserRequested } from 'store/slices/userSlice'
import { useAppDispatch } from 'shared/hooks/redux'

import { nav_links } from 'shared/mocks/navBar'

import s from './navMobile.module.scss'

export interface NavMobileProps {
  classNames?: string
}

export const NavMobile: FC<NavMobileProps> = ({ classNames }) => {
  const dispatch = useAppDispatch()
  const [activeLink, setActiveLink] = useState<string>('Buy Stocks')
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const logoutUser = async () => {
    try {
      await logoutAuth()
      dispatch(logoutUserRequested())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className={cn(s.mobileNavBar, classNames)}>
      <div className={s.mobileNav}>
        <div className={s.mobileNavLogo}>
          <Image
            className={s.mobileLogo}
            width={29}
            height={44}
            alt='logo'
            src='/assets/icons/LogoColor.png'
          />
        </div>

        <div className={s.mobileNavbarWrapper}>
          <div className={s.avatarGroup}>
            <span className={s.userName}>Green Tree</span>

            <div className={s.userFoto}>
              <Image
                src='/assets/image/user.png'
                width={52}
                height={52}
                style={{ objectFit: 'cover' }}
                alt='avatar'
              />
            </div>
          </div>

          <div
            onClick={() => setIsOpenMenu(prev => !prev)}
            className={cn(s.burgerMenu, { [s.activeMenu]: isOpenMenu })}
          >
            <div className={s.burgerMenuLine}></div>
            <div className={s.burgerMenuLine}></div>
            <div className={s.burgerMenuLine}></div>
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div className={s.burgerMenuList}>
          <div className={s.burgerMenuTop}>
            <div className={s.burgerMenuTopItem}>
              <div className={s.burgerMenuBalance}>Saldo</div>
              <div className={s.burgerMenuBalanceNum}>8.983,66 SEK</div>
            </div>

            <button className={s.burgerMenuLogoutWrapper} onClick={logoutUser}>
              <div className={s.burgerMenuLogout}>Logga ut</div>
              <div>
                <Image
                  src='/assets/icons/logout.svg'
                  width={24}
                  height={24}
                  alt='logout'
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </button>
          </div>

          {nav_links.map(item => (
            <div className={s.linkItem} key={item.label}>
              <Link href={item.link}>
                <a
                  onClick={() => setActiveLink(item.label)}
                  className={cn(s.burgerLink, {
                    [s.active]: activeLink === item.label,
                  })}
                >
                  {item.label}
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
