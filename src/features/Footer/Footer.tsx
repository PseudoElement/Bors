import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from 'components/Navbar/Navbar'

import s from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerWrapper}>
        <div className={s.logoWrapper}>
          <div className={s.logoGroup}>
            <div className={s.logo}>
              <Image layout='fill' alt='logo' src='/assets/icons/Logo.png' />
            </div>
            <div className={s.logoText}>
              <Image
                src='/assets/icons/Bors.svg'
                layout='fill'
                alt='BorsJakten'
              />
            </div>
          </div>
          <div className={s.logoTitle}>
            Simple and convenient platform for online stock trading
          </div>
        </div>
        <Navbar variant={true} />

        <div className={s.line}></div>

        <div className={s.contacts}>
          <span className={s.location}>The Netherlands, Leiden</span>

          <Link href='tel:88005501550'>
            <span className={s.tel}>8 800 550-15-50</span>
          </Link>

          <div className={s.icons}>
            <Link href='https://twitter.com'>
              <div className={s.circle}>
                <Image
                  src='/assets/icons/Twitter.svg'
                  width={18}
                  height={15}
                  alt='twitter'
                />
              </div>
            </Link>

            <Link href='https://twitter.com'>
              <div className={s.circle}>
                <Image
                  src='/assets/icons/Instagram.svg'
                  width={17}
                  height={17}
                  alt='instagram'
                />
              </div>
            </Link>

            <Link href='https://twitter.com'>
              <div className={s.circle}>
                <Image
                  src='/assets/icons/Telegram.svg'
                  width={18}
                  height={15}
                  alt='telegram'
                />
              </div>
            </Link>

            <Link href='https://twitter.com'>
              <div className={s.circle}>
                <Image
                  src='/assets/icons/Youtube.svg'
                  width={20}
                  height={14}
                  alt='youtube'
                />
              </div>
            </Link>
          </div>

          <Link href='mailto:Bors@Jakten.bj'>
            <span className={s.mail}>Bors@Jakten.bj</span>
          </Link>
        </div>

        <div className={s.line}></div>

        <div className={s.agreement}>
          <span>@ 2023 Bors Jakten</span>
          <span>
            <Link href='#'>AML</Link>
          </span>
          <span>
            <Link href='#'>Partnership Agreement</Link>
          </span>
          <span>
            <Link href='#'>Privacy Policy</Link>
          </span>
          <span>
            <Link href='#'>User Agreement</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
