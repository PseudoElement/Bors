import { FC} from 'react'
import s from './logo.module.scss'
import LogoImage from '/public/assets/image/logoImage.svg'
import LogoText from '/public/assets/image/logoText.svg'

export const Logo: FC = () => {
  return (
  <div className={s.logo}>
    <LogoImage className={s.logoImage} />
    <LogoText className={s.logoText} />
  </div>
  )
}
