import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from 'components'

import { logoutAuth } from 'shared/api/routes/user'
import { logoutUserRequested } from 'store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { cookies } from 'shared/utils/Cookies'

import { nav_links } from 'shared/mocks/navBar'
import logo from '/public/assets/image/smaloLogo.png'

import s from './navProfile.module.scss'

export interface NavMainProps {
  classNames?: string
}

export const NavProfile: FC<NavMainProps> = ({ classNames }) => {
  const dispatch = useAppDispatch()
  const { push, pathname } = useRouter()
  const user = useAppSelector(state => state.user.user)

  const logoutUser = async () => {
    await push('/')
    await dispatch(logoutUserRequested())
    await cookies.remove('token')
    try {
      await logoutAuth()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className={cn(s.nav, classNames)}>
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

      <ul className={s.tabs}>
        {nav_links.map(link => (
          <li
            key={link.label}
            onClick={() => push(link.link)}
            className={cn(s.link, {
              [s.active]: pathname === link.link,
            })}
          >
            <Link href={link.link}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={s.userInfo}>
        <div className={s.avatarGroup}>
          <span>{user?.name}</span>

          <div className={s.userFoto}>
            {user?.avatar ? (
              <div
                className={s.userAvatar}
                style={{ backgroundImage: `url("${user.avatar}")` }}
              />
            ) : (
              <div className={s.defaultAvatar} />
            )}
          </div>
        </div>

        <div className={s.userBalance}>
          <div className={s.title}>MITT KONTO</div>
          <div className={s.balance}>{user?.balance} sek</div>
        </div>

        <div className={s.logOutButton}>
          <button onClick={logoutUser}>
            <Image
              src={'/assets/icons/logout.svg'}
              width={18}
              height={18}
              alt='logout'
              style={{ cursor: 'pointer' }}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}
