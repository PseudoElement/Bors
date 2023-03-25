import { FC } from 'react'

import s from './tag.module.scss'

interface TagProps {
  title: string
}
export const Tag: FC<TagProps> = ({ title }) => {
  return <div className={s.tag}>{title}</div>
}
