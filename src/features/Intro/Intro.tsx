import { FC} from 'react'
import Image from 'next/image'
import s from './intro.module.scss'
import IconDown from '/public/assets/icons/iconDown.png'
import { Logo } from 'components'


export const Intro: FC = () => {
  return (
  <div className={s.intro}>
    <div className={s.backgroundMask}></div>
    <div className={s.container}>
      <div className={s.logo}>
        <Logo /> 
      </div>
      <p className={s.text}>Simple and convenient platform for online stock trading</p>
      <div className={s.iconContainer}>
        <Image 
          className={s.iconDown}
          src={IconDown}
          alt='icon down'
        />
      </div>
    </div>
  </div>
  )
}
