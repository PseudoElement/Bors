import { FC, useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { TabContext } from 'context/TabProvider'

import AccountImg from '/public/assets/icons/accountImg.svg'

import s from './navbar.module.scss'

interface Variant {
  variant: string
}

export const Navbar: FC<Variant> = ({ variant }) => {

  const [activeLink, setActiveLink] = useState<string>('Buy Stocks')

  const { setActiveTab } = useContext(TabContext)

  return variant === 'authorised' ? (
    <nav className={s.nav2}>
      <div className={s.logoGroup2}>
        <Image
          className={s.logo2}
          width={29}
          height={44}
          alt='logo'
          src='/assets/icons/LogoColor.png'
        />
        <Image
          src='/assets/icons/BorsColor.svg'
          width={199}
          height={26.52}
          className={s.logoText2}
          alt='BorsJakten'
        />
      </div>

      <ul>
        <li
          onClick={() => { setActiveLink('Buy Stocks') }}
          id='Buy Stocks'
          className={
            activeLink === 'Buy Stocks' ? s.link + ' ' + s.active : s.link
          }
        >
          <div onClick={() => setActiveTab('Buy Stocks')}>Buy Stocks</div>
        </li>

        <li
          onClick={() => { setActiveLink('Personal Account') }}
          id='Personal Account'
          className={
            activeLink === 'Personal Account' ? s.link + ' ' + s.active : s.link
          }
        >
          <div onClick={() => setActiveTab('Personal Account')}>Personal Account</div>
        </li>

        <li
          onClick={() => { setActiveLink('My Stocks') }}
          id='My Stocks'
          className={
            activeLink === 'My Stocks' ? s.link + ' ' + s.active : s.link
          }
        >
          <div onClick={() => setActiveTab('My Stocks')}>My Stocks</div>
        </li>
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

        <div className={s.verticalLine}></div>

        <div className={s.userBalance}>
          <div>Balance</div>
          <span>8.983,66 sek</span>
        </div>

        <div className={s.verticalLine}></div>

        <Image
          src='/assets/icons/logout.svg'
          width={24}
          height={24}
          alt='logout'
          style={{ cursor: 'pointer' }}
        />
      </div>
    </nav>
  ) : (
    <nav className={s.nav1}>
      <ul>
        <li>
          <Link href='#about'>About the platform</Link>
        </li>

        <li>
          <Link href='#event'>Events</Link>
        </li>

        <li>
          <Link href='#leaderboard'>Leaderboard</Link>
        </li>

        <li>
          <Link href='#sponsors'>Sponsors</Link>
        </li>

        <li>
          <Link href='#contacts'>Contacts</Link>
        </li>

        <li>
          <Link href='#'>Stock</Link>
        </li>
      </ul>
      <button>
        <div className={s.btnImg} onClick={() => { }}>
          <AccountImg />
        </div>
        Personal Account
      </button>
    </nav>
  )
}
