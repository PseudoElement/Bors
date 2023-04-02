import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { LoginRegistrationModal } from 'features'

import AccountImg from '/public/assets/icons/accountImg.svg'


import s from './navbar.module.scss'

interface Variant {
  variant: string
}

export const Navbar: FC<Variant> = ({ variant }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [activeLink, setActiveLink] = useState<string>('Buy Stocks')

  return (
    <>
      <LoginRegistrationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      {variant === 'authorised' ? (
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
              onClick={() => setActiveLink('Buy Stocks')}
              id='Buy Stocks'
              className={
                activeLink === 'Buy Stocks' ? s.link + ' ' + s.active : s.link
              }
            >
              <Link href='#'>Buy Stocks</Link>
            </li>
            <li
              onClick={() => setActiveLink('Personal Account')}
              id='Personal Account'
              className={
                activeLink === 'Personal Account'
                  ? s.link + ' ' + s.active
                  : s.link
              }
            >
              <Link href='#'>Rersonal Account</Link>
            </li>
            <li
              onClick={() => setActiveLink('My Stocks')}
              id='My Stocks'
              className={
                activeLink === 'My Stocks' ? s.link + ' ' + s.active : s.link
              }
            >
              <Link href='#'>My Stocks</Link>
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
              <Link href='#about' scroll={false}>About the platform</Link>
            </li>

            <li>
              <Link href='#event' scroll={false}>Events</Link>
            </li>

            <li>
              <Link href='#leaderboard' scroll={false}>Leaderboard</Link>
            </li>

            <li>
              <Link href='#sponsors' scroll={false}>Sponsors</Link>
            </li>

            <li>
              <Link href='#contacts' scroll={false}>Contacts</Link>
            </li>

            <li>
              <Link href='#'>Stock</Link>
            </li>
          </ul>
          <button onClick={() => setIsOpen(prev => !prev)}>
            <div className={s.btnImg}>
              <AccountImg />
            </div>
            Personal Account
          </button>
        </nav>
      )}
    </>
  )
}
