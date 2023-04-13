import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { SiteData } from 'shared/types/site'
import IconDown from '/public/assets/icons/iconDown.png'

import s from './intro.module.scss'

export const Intro: FC<SiteData> = ({ logo, desc }) => {
  return (
    <div className={s.intro}>
      <div className={s.backgroundMask}></div>

      <div className={s.container}>
        <div className={s.logo}>
          {logo && <Image src={logo} width={596} height={168} alt='logo' />}
        </div>

        <p className={s.text}>{desc}</p>

        <Link href={'#info'} scroll={false}>
          <div className={s.iconContainer}>
            <Image className={s.iconDown} src={IconDown} alt='icon down' />
          </div>
        </Link>
      </div>
    </div>
  )
}
