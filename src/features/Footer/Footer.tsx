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
            Sveriges förmodligen mest prestigefyllda aktietävling
          </div>
        </div>
        <Navbar variant={true} />

        <div className={s.line} />

        <div className={s.contacts}>
          <span className={s.location}>The Netherlands, Leiden</span>

          <Link href='mailto:Bors@Jakten.bj'>
            <span className={s.mail}>Bors@Jakten.bj</span>
          </Link>

          <Link href='https://twitter.com'>
            <div className={s.instLink}>
              <span>Instagram</span>
              <div className={s.circle}>
                <Image
                  src='/assets/icons/Instagram.svg'
                  width={17}
                  height={17}
                  alt='instagram'
                />
              </div>
            </div>
          </Link>
        </div>

        <div className={s.line} />

        <div className={s.agreement}>
          <span>@2023 BORS JAKTEN</span>
          <span>
            <Link href='#'>Tävlingsvillkor</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
