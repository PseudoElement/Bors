import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { LoginRegistrationModal } from 'features'

import AccountImg from '/public/assets/icons/accountImg.svg'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import cn from 'classnames'
import s from './navbar.module.scss'

interface Variant {
  variant: string
}

export const Navbar: FC<Variant> = ({ variant }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [activeLink, setActiveLink] = useState<string>('Buy Stocks')

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const { width } = useWindowDimensions()

  const { push } = useRouter()

  useEffect(() => {
    if (variant === 'authorised') {
      push('/profile/buy-stocks')
    }
  }, [variant])

  return (
    <>
      <LoginRegistrationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      {variant === 'authorised' ? (
        width > 900 ? (
          <nav className={s.nav2}>
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
            <ul>
              <li
                onClick={() => setActiveLink('Buy Stocks')}
                id='Buy Stocks'
                className={
                  activeLink === 'Buy Stocks' ? s.link + ' ' + s.active : s.link
                }
              >
                <Link href='/profile/buy-stocks'>
                  <a>Buy Stocks</a>
                </Link>
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
                <Link href='/profile/personal-account'>
                  <a>Personal Account</a>
                </Link>
              </li>
              <li
                onClick={() => setActiveLink('My Stocks')}
                id='My Stocks'
                className={
                  activeLink === 'My Stocks' ? s.link + ' ' + s.active : s.link
                }
              >
                <Link href='/profile/my-stocks'>
                  <a>My Stocks</a>
                </Link>
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
              <div className={s.userBalance}>
                <div>Balance</div>
                <span>8.983,66 sek</span>
              </div>
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
          <nav className={s.mobileNavBar}>
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
                    <div className={s.burgerMenuBalance}>Balance</div>
                    <div className={s.burgerMenuBalanceNum}>8.983,66 SEK</div>
                  </div>
                  <div className={s.burgerMenuLogoutWrapper}>
                    <div className={s.burgerMenuLogout}>Log out</div>
                    <div>
                      <Image
                        src='/assets/icons/logout.svg'
                        width={24}
                        height={24}
                        alt='logout'
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                </div>
                <div className={s.linkItem}>
                  <Link href={'/profile/buy-stocks'}>
                    <a
                      onClick={() => setActiveLink('Buy Stocks')}
                      className={cn(s.burgerLink, {
                        [s.active]: activeLink === 'Buy Stocks',
                      })}
                    >
                      Buy Stocks
                    </a>
                  </Link>
                </div>
                <div className={s.linkItem}>
                  <Link href={'/profile/personal-account'}>
                    <a
                      onClick={() => setActiveLink('Personal account')}
                      className={cn(s.burgerLink, {
                        [s.active]: activeLink === 'Personal account',
                      })}
                    >
                      Personal account
                    </a>
                  </Link>
                </div>
                <div className={s.linkItem}>
                  <Link href={'/profile/my-stocks'}>
                    <a
                      onClick={() => setActiveLink('My Stocks')}
                      className={cn(s.burgerLink, {
                        [s.active]: activeLink === 'My Stocks',
                      })}
                    >
                      My Stocks
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </nav>
        )
      ) : (
        <nav className={s.nav1}>
          <ul>
            <li>
              <Link href='#about' scroll={false}>
                About the platform
              </Link>
            </li>

            <li>
              <Link href='#event' scroll={false}>
                Events
              </Link>
            </li>

            <li>
              <Link href='#leaderboard' scroll={false}>
                Leaderboard
              </Link>
            </li>

            <li>
              <Link href='#sponsors' scroll={false}>
                Sponsors
              </Link>
            </li>

            <li>
              <Link href='#contacts' scroll={false}>
                Contacts
              </Link>
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
