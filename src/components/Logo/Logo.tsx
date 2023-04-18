import { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import s from './logo.module.scss'

interface LogoProps {
  logoImage: string
  logoText: string
  classNames?: string
}
export const Logo: FC<LogoProps> = ({ logoImage, logoText, classNames }) => {
  return (
    <div className={cn(s.logo, classNames)}>
      <div className={s.logoImage}>
        {logoImage && <Image src={logoImage} layout='fill' alt='logo' />}
      </div>

      <div className={s.logoText}>
        <div className={s.logoWord}>{logoText.slice(0, 4)}</div>
        <div className={s.logoWord}>{logoText.slice(4, logoText.length)}</div>
      </div>
    </div>
  )
}
