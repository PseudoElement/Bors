import { FC, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BurgerMenuButton, Logo } from 'components'

import { logoutAuth } from 'shared/api/routes/user'
import { logoutUserRequested } from 'store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { cookies } from 'shared/utils/Cookies'
import { toFixedCount } from 'shared/helpers/countToBuy'

import { nav_links } from 'shared/mocks/navBar'
import logo from '/public/assets/image/smaloLogo.png'

import s from './navMobile.module.scss'

export interface NavMobileProps {
  classNames?: string
}

export const NavMobile: FC<NavMobileProps> = ({ classNames }) => {
  const dispatch = useAppDispatch()
  const { push, pathname } = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const user = useAppSelector(state => state.user.user)

  const logoutUser = async () => {
    try {
      await logoutAuth()
      dispatch(logoutUserRequested())
    } catch (error) {
      console.error(error)
    }
  }
  const handleLogOut = async () => {
    await push('/')
    await cookies.remove('token')
    await logoutUser()
  }

  return (
    <nav className={cn(s.mobileNavBar, classNames)}>
      <div className={s.mobileNav}>
        <div className={s.logoMini}>
          <Link href={'/'}>
            <a>
              <Image
                className={s.mobileLogo}
                width={29}
                height={44}
                alt='logo'
                src='/assets/icons/LogoColor.png'
              />
            </a>
          </Link>
        </div>

        <div className={s.logoBig}>
          <Link href={'/'}>
            <a>
              <Logo
                size={'small'}
                logoImage={logo.src}
                logoText={'BörsJakten'}
                classNames={s.logo}
              />
            </a>
          </Link>
        </div>

        <div className={s.mobileNavbarWrapper}>
          <div className={s.avatarGroup}>
            <span className={s.userName}>{user ? user?.name : 'User Name'}</span>

            <div className={s.userFoto}>
              {user?.avatar ? (
                <div
                  className={s.userAvatar}
                  style={{ backgroundImage: `url("${user?.avatar}")` }}
                />
              ) : (
                <div className={s.defaultAvatar} />
              )}
            </div>
          </div>

          <BurgerMenuButton
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={() => setIsOpenMenu(prev => !prev)}
            defaultStyles={s.burgerMenuLine}
          />
        </div>
      </div>

      {isOpenMenu && (
        <div className={s.burgerMenuList}>
          <div className={s.burgerMenuTop}>
            <div className={s.burgerMenuTopItem}>
              <div className={s.burgerMenuBalance}>Saldo</div>
              <div className={s.burgerMenuBalanceNum}>
                {toFixedCount(user?.total_balance)} SEK
              </div>
            </div>

            <button
              className={s.burgerMenuLogoutWrapper}
              onClick={handleLogOut}
            >
              <div className={s.burgerMenuLogout}>Logga ut</div>

              <Image
                src='/assets/icons/logout.svg'
                width={24}
                height={24}
                alt='logout'
                style={{ cursor: 'pointer' }}
              />
            </button>
          </div>

          {nav_links.map(item => (
            <Link href={item.link} key={item.label}>
              <div className={s.linkItem}>
                <a
                  className={cn(s.burgerLink, {
                    [s.active]: pathname === item.link,
                  })}
                >
                  {item.label}
                </a>
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
