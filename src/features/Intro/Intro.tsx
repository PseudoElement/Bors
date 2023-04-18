import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Logo } from 'components'

import { SiteData } from 'shared/types/site'
import IconDown from '/public/assets/icons/iconDown.png'

import s from './intro.module.scss'

export const Intro: FC<SiteData> = ({ logo, desc, title }) => {
  return (
    <div className={s.intro}>
      <div className={s.backgroundMask} />

      <div className={s.container}>
        <Logo logoImage={logo} logoText={title} classNames={s.logo}/>

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
