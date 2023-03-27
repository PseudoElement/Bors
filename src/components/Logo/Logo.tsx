import { FC } from 'react'
import s from './logo.module.scss'
import LogoText from '/public/assets/image/logoText.svg'
import LogoImage from '/public/assets/icons/Logo.png'
import Image from 'next/image'

export const Logo: FC = () => {
  return (
    <div className={s.logo}>
      <Image src={LogoImage} className={s.logoImage} alt='Logo' />
      <LogoText className={s.logoText} />
    </div>
  )
}
