import { FC } from 'react'
import Link from 'next/link'

import { NavbarFoot } from 'components/Navbar/NavFoot/NavbarFoot'

import s from './footer.module.scss'

export const Footer: FC = () => {

  return (
    <footer className={s.footer}>
      <div className={s.footerWrapper}>        

        <NavbarFoot variant={true} socialLink={true}/>

        <div className={s.line} />

        <div className={s.agreement}>
          <span>@2023 BORS JAKTEN</span>

          <span>
            <Link href='/assets/files/Tävlingsvillkor.pdf'>
              <a target="_blank">Tävlingsvillkor</a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
