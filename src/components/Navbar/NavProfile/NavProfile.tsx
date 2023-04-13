import { FC, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { logoutAuth } from 'shared/api/routes/user'
import { logoutUserRequested } from 'store/slices/userSlice'
import { useAppDispatch } from 'shared/hooks/redux'
import { cookies } from 'shared/utils/Cookies'

import { nav_links } from 'shared/mocks/navBar'

import s from './navProfile.module.scss'

export interface NavMainProps {
  classNames?: string
}

export const NavProfile: FC<NavMainProps> = ({ classNames }) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const [activeLink, setActiveLink] = useState<string>('Buy Stocks')

  const logoutUser = async () => {
    await push('/')
    await cookies.remove('token')

    try {
      await logoutAuth()
      dispatch(logoutUserRequested())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className={cn(s.nav2, classNames)}>
      <Link href={'/'}>
        <a>
          <div className={s.logoGroup2}>
            <div className={s.logo2}>
              <Image
                width={29}
                height={44}
                alt='logo'
                src='/assets/icons/LogoColor.png'
              />
            </div>

            <div className={s.logoText2}>
              <Image
                src='/assets/icons/BorsColor.svg'
                width={199}
                height={26.52}
                alt='BorsJakten'
              />
            </div>
          </div>
        </a>
      </Link>

      <ul>
        {nav_links.map(link => (
          <li
            key={link.label}
            onClick={() => setActiveLink(link.label)}
            className={cn(s.link, {
              [s.active]: activeLink === link.label,
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
          <span>Green Tree</span>

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

        <div className={s.userBalance}>
          <div>Balance</div>
          <span>8.983,66 sek</span>
        </div>

        <Image
          src={'/assets/icons/logout.svg'}
          width={24}
          onClick={logoutUser}
          height={24}
          alt='logout'
          style={{ cursor: 'pointer' }}
        />
      </div>
    </nav>
  )
}
