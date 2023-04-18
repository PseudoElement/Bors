import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { NavbarFoot } from 'components/Navbar/NavFoot/NavbarFoot'

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
        </div>
        <NavbarFoot variant={true} socialLink={true}/>

        <div className={s.line} />


        <div className={s.agreement}>
          <span>@2023 BORS JAKTEN</span>
          <span>
            <Link href={'/'} >
                  Tävlingsvillkor             
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
