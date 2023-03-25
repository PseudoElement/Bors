import { FC } from 'react'
import Image from 'next/image'

import s from './info.module.scss'

export const Info: FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  console.log('ok')
  return (
    <div className={s.card}>
      <p
        className={s.cardTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      ></p>
      <div className={s.cardImageWrapper}>
        <Image className={s.cardImage} src={image} width={210} height={210} />
      </div>
      <div className={s.cardImageWrapper}>
        <Image className={s.cardImage} src={image} width={210} height={210} />
      </div>
    </div>
  )
}
